import fs from 'fs';
import path from 'path';

interface BatchJob {
  type: 'generate' | 'update' | 'validate';
  source: string;
  target?: string;
}

interface BatchStats {
  processed: number;
  succeeded: number;
  failed: number;
  errors: string[];
}

interface ProcessedData {
  transformed: boolean;
  data: string[];
  updatedAt?: string;
}

class BatchProcessor {
  private stats: BatchStats = {
    processed: 0,
    succeeded: 0,
    failed: 0,
    errors: []
  };

  async processJobs(jobs: BatchJob[]): Promise<BatchStats> {
    console.log(`Starting batch processing of ${jobs.length} jobs...`);

    for (const job of jobs) {
      try {
        await this.processJob(job);
        this.stats.succeeded++;
      } catch (error) {
        this.stats.failed++;
        if (error instanceof Error) {
          this.stats.errors.push(`Error in job ${job.type}: ${error.message}`);
        } else {
          this.stats.errors.push(`Error in job ${job.type}: Unknown error`);
        }
        console.error(`Failed to process job:`, error);
      }
      this.stats.processed++;
    }

    return this.stats;
  }

  private async processJob(job: BatchJob): Promise<void> {
    switch (job.type) {
      case 'generate':
        await this.generateData(job);
        break;
      case 'update':
        if (!job.target) {
          throw new Error('Target is required for update jobs');
        }
        await this.updateData(job);
        break;
      case 'validate':
        await this.validateData(job);
        break;
      default:
        throw new Error(`Unknown job type: ${job.type}`);
    }
  }

  private async generateData(job: BatchJob): Promise<void> {
    // Read source data (e.g., CSV)
    const sourceData = await fs.promises.readFile(job.source, 'utf-8');
    
    // Process the data (example: parse CSV and transform)
    const processedData = this.transformData(sourceData);
    
    // Write to target if specified
    if (job.target) {
      await fs.promises.writeFile(job.target, JSON.stringify(processedData, null, 2));
    }
  }

  private async updateData(job: BatchJob): Promise<void> {
    if (!job.target) return;

    // Read existing data
    const existingData = await fs.promises.readFile(job.target, 'utf-8');
    const newData = await fs.promises.readFile(job.source, 'utf-8');
    
    // Merge data
    const merged = this.mergeData(
      JSON.parse(existingData) as ProcessedData,
      JSON.parse(newData) as ProcessedData
    );
    
    // Write back
    await fs.promises.writeFile(job.target, JSON.stringify(merged, null, 2));
  }

  private async validateData(job: BatchJob): Promise<void> {
    const data = await fs.promises.readFile(job.source, 'utf-8');
    
    // Perform validation
    const validationResult = this.validateDataFormat(data);
    
    if (!validationResult.valid) {
      throw new Error(`Validation failed: ${validationResult.errors.join(', ')}`);
    }
  }

  // Helper methods
  private transformData(data: string): ProcessedData {
    return {
      transformed: true,
      data: data.split('\n').map(line => line.trim()),
      updatedAt: new Date().toISOString()
    };
  }

  private mergeData(existing: ProcessedData, newData: ProcessedData): ProcessedData {
    return {
      ...existing,
      ...newData,
      updatedAt: new Date().toISOString()
    };
  }

  private validateDataFormat(data: string): { valid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    try {
      JSON.parse(data);
    } catch {
      errors.push('Invalid JSON format');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }
}

// Example usage
async function runBatchJobs(): Promise<void> {
  const processor = new BatchProcessor();
  
  const jobs: BatchJob[] = [
    {
      type: 'generate',
      source: path.join(process.cwd(), 'data', 'csv', 'locations.csv'),
      target: path.join(process.cwd(), 'data', 'json', 'locations.json')
    },
    {
      type: 'validate',
      source: path.join(process.cwd(), 'data', 'json', 'locations.json')
    }
  ];

  try {
    const stats = await processor.processJobs(jobs);
    console.log('Batch processing completed:', stats);
  } catch (error) {
    console.error('Batch processing failed:', error);
    process.exit(1);
  }
}

// Run the batch processor
runBatchJobs();
