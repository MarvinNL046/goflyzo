import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { createClient, PostgrestError } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL');
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function migrateLocations() {
  try {
    // Read CSV file
    console.log('Reading CSV file...');
    const filePath = path.join(process.cwd(), 'data', 'csv', 'locations.csv');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });
    console.log(`Successfully parsed ${records.length} records from CSV`);

    // Insert records into Supabase
    console.log('Inserting records into Supabase...');
    for (const record of records) {
      const { error } = await supabase
        .from('locations')
        .upsert([record], {
          onConflict: 'country,city'
        });
      
      if (error) {
        throw error;
      }
    }

    console.log('Migration completed successfully!');
    console.log(`Inserted ${records.length} records into Supabase`);
  } catch (error) {
    const postgrestError = error as PostgrestError;
    console.error('Error during migration:', {
      message: postgrestError.message,
      details: postgrestError.details,
      hint: postgrestError.hint,
      code: postgrestError.code
    });
    process.exit(1);
  }
}

migrateLocations();
