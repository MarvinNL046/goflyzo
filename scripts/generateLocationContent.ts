import { createClient } from '@supabase/supabase-js';
import { Anthropic } from '@anthropic-ai/sdk';
import { getAllCountries } from '@/lib/locations';
import JSON5 from 'json5';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from scripts/.env
dotenv.config({ path: path.join(__dirname, '.env') });

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY || !process.env.ANTHROPIC_API_KEY) {
  throw new Error('Required environment variables are missing. Please check scripts/.env file.');
}

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

interface GeneratedContent {
  description: string;
  historicalContext: string;
  regions: {
    name: string;
    description: string;
  }[];
  culturalHighlights: string[];
  localCustoms: string[];
  cuisine: {
    overview: string;
    mustTry: string[];
  };
  transportation: {
    overview: string;
    tips: string[];
  };
  practicalInfo: {
    currency: string;
    languages: string[];
    electricity: string;
    timezone: string;
  };
  bestTimeToVisit: {
    overview: string;
    seasonalInfo: {
      season: string;
      description: string;
    }[];
  };
  safetyInfo: {
    overview: string;
    tips: string[];
    emergencyNumbers: string;
  };
  travelTips: string[];
  sources: string[];
  methodology: string;
}

interface ApiError {
  response?: {
    data: unknown;
  };
  message: string;
  code?: string;
}

function logError(error: ApiError | Error | unknown, context: string) {
  console.error('\x1b[31m%s\x1b[0m', `ERROR in ${context}:`);
  if ((error as ApiError).response?.data) {
    console.error('API Response:', (error as ApiError).response?.data);
  }
  console.error('Full error:', error);
}

async function validateAndParseJSON(content: string): Promise<GeneratedContent> {
  try {
    // First try standard JSON.parse
    return JSON.parse(content) as GeneratedContent;
  } catch {
    try {
      // If that fails, try JSON5 which is more lenient
      return JSON5.parse(content) as GeneratedContent;
    } catch (json5Error) {
      if (json5Error instanceof Error) {
        throw new Error(`Failed to parse content: ${json5Error.message}`);
      }
      throw new Error('Failed to parse content: Unknown error');
    }
  }
}

async function generateLocationContent(
  country: string, 
  retryCount = 0,
  maxRetries = 3
): Promise<GeneratedContent> {
  console.log(`\n🌍 Generating content for ${country}... (Attempt ${retryCount + 1}/${maxRetries + 1})`);
  
  try {
    console.log('Making API request to Claude...');
    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 4000,
      messages: [{
        role: "user",
        content: `You are a travel expert generating a comprehensive guide for ${country}. Your response must be a valid JSON object matching the structure provided below. Pay careful attention to JSON formatting - ensure all quotes, commas, and brackets are correctly placed.

        Important Guidelines:
        1. Ensure all information is current and accurate
        2. Include specific, verifiable details
        3. Focus on unique insights beyond basic tourist information
        4. Double-check JSON syntax before responding
        5. Use only double quotes for strings
        6. Ensure all arrays and objects are properly terminated
        7. Do not include any text outside the JSON object

        Format as a JSON object with this exact structure:
        {
          "description": "string",
          "historicalContext": "string",
          "regions": [{"name": "string", "description": "string"}],
          "culturalHighlights": ["string"],
          "localCustoms": ["string"],
          "cuisine": {
            "overview": "string",
            "mustTry": ["string"]
          },
          "transportation": {
            "overview": "string",
            "tips": ["string"]
          },
          "practicalInfo": {
            "currency": "string",
            "languages": ["string"],
            "electricity": "string",
            "timezone": "string"
          },
          "bestTimeToVisit": {
            "overview": "string",
            "seasonalInfo": [{"season": "string", "description": "string"}]
          },
          "safetyInfo": {
            "overview": "string",
            "tips": ["string"],
            "emergencyNumbers": "string"
          },
          "travelTips": ["string"],
          "sources": ["string"],
          "methodology": "string"
        }

        Important:
        - Focus on accuracy and authenticity
        - Include specific details and examples
        - Avoid generic or obvious information
        - Ensure all information is current and verifiable
        - Respond with ONLY the JSON object, no other text`
      }]
    });

    console.log('Parsing Claude response...');
    const content = response.content[0].type === 'text' 
      ? response.content[0].text.trim()
      : '';
    
    try {
      const parsedContent = await validateAndParseJSON(content);
      console.log('✅ Successfully generated and parsed content');
      return parsedContent;
    } catch (parseError) {
      console.error('\x1b[31m%s\x1b[0m', 'Failed to parse Claude response:');
      console.error('Raw response:', content);
      
      if (retryCount < maxRetries) {
        console.log(`🔄 Retrying... (${retryCount + 1}/${maxRetries})`);
        // Add a small delay before retrying
        await new Promise(resolve => setTimeout(resolve, 2000));
        return generateLocationContent(country, retryCount + 1, maxRetries);
      }
      
      throw new Error(`Failed to parse content for ${country} after ${maxRetries + 1} attempts: ${(parseError as Error).message}`);
    }
  } catch (error) {
    logError(error, `generateLocationContent for ${country}`);
    
    if (retryCount < maxRetries) {
      console.log(`🔄 Retrying due to API error... (${retryCount + 1}/${maxRetries})`);
      // Add a small delay before retrying
      await new Promise(resolve => setTimeout(resolve, 2000));
      return generateLocationContent(country, retryCount + 1, maxRetries);
    }
    
    throw error;
  }
}

interface GenerationOptions {
  forceUpdate?: boolean;
  startFrom?: string;
  limit?: number;
}

async function generateAllContent(options: GenerationOptions = {}) {
  const { forceUpdate = false, startFrom = '', limit } = options;
  
  try {
    console.log('\n📋 Initializing content generation...');
    
    // Get all countries
    const countries = getAllCountries();
    console.log(`📊 Found ${countries.length} countries total`);

    // Filter and validate countries
    let filteredCountries = countries;
    if (startFrom) {
      console.log(`🔍 Looking for start country: ${startFrom}`);
      const startIndex = countries.findIndex(c => c.toLowerCase() === startFrom.toLowerCase());
      if (startIndex === -1) {
        throw new Error(`❌ Start country "${startFrom}" not found in the list`);
      }
      filteredCountries = countries.slice(startIndex);
      console.log(`✅ Found start country at index ${startIndex}`);
    }

    if (limit) {
      filteredCountries = filteredCountries.slice(0, limit);
      console.log(`📊 Limited to ${limit} countries`);
    }

    console.log('\n📝 Generation Plan:');
    console.log(`• Total countries to process: ${filteredCountries.length}`);
    console.log(`• Starting with: ${filteredCountries[0]}`);
    console.log(`• Ending with: ${filteredCountries[filteredCountries.length - 1]}`);
    console.log(`• Force update: ${forceUpdate ? 'Yes' : 'No'}\n`);

    let successCount = 0;
    let errorCount = 0;
    const errors: { country: string; error: ApiError | Error | unknown }[] = [];

    for (const country of filteredCountries) {
      try {
        console.log(`\n🔄 Processing ${country}...`);

        // Check existing content
        console.log('Checking Supabase for existing content...');
        const { data: existing, error: fetchError } = await supabase
          .from('location_content')
          .select('*')
          .eq('country', country)
          .single();

        if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116 is "not found"
          throw fetchError;
        }

        if (existing && !forceUpdate) {
          console.log(`ℹ️ Content exists for ${country}, skipping...`);
          successCount++;
          continue;
        }

        // Generate and store content
        const content = await generateLocationContent(country);
        
        console.log('Storing in Supabase...');
        const { error: upsertError } = await supabase
          .from('location_content')
          .upsert({
            country: country.toLowerCase(),
            content,
            last_updated: new Date().toISOString(),
            model_used: 'claude-3-haiku-20240307'
          });

        if (upsertError) {
          throw upsertError;
        }

        console.log(`✅ Successfully processed ${country}`);
        successCount++;
        
        // Add a small delay to avoid rate limits
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error(`❌ Error processing ${country}:`);
        logError(error, country);
        errorCount++;
        errors.push({ country, error });
        // Continue with next country
      }
    }

    // Final report
    console.log('\n📊 Generation Summary:');
    console.log(`✅ Successful: ${successCount}`);
    console.log(`❌ Failed: ${errorCount}`);
    
    if (errors.length > 0) {
      console.log('\n❌ Errors encountered:');
      errors.forEach(({ country, error }) => {
        console.log(`\n${country}:`);
        logError(error, country);
      });
    }

    console.log('\n🎉 Content generation completed!');
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
const options: GenerationOptions = {};

for (let i = 0; i < args.length; i++) {
  switch (args[i]) {
    case '--force':
      options.forceUpdate = true;
      break;
    case '--start-from':
      options.startFrom = args[++i];
      break;
    case '--limit':
      options.limit = parseInt(args[++i], 10);
      break;
  }
}

// Run the script
generateAllContent(options).catch(console.error);

export { generateAllContent };
