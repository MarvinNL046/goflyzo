const fs = require('fs');
const path = require('path');

try {
  const projectRoot = 'c:/Users/Mrvin/Documents/Affliatie websites/goflyzo';
  const csvPath = path.join(projectRoot, 'data', 'csv', 'locations.csv');
  console.log('Looking for CSV file at:', csvPath);
  
  if (fs.existsSync(csvPath)) {
    const content = fs.readFileSync(csvPath, 'utf-8');
    console.log('CSV file found and read successfully');
    console.log('First 200 characters:', content.substring(0, 200));
  } else {
    console.log('CSV file not found');
    console.log('Current directory:', process.cwd());
    console.log('Directory contents:', fs.readdirSync(projectRoot));
  }
} catch (error) {
  console.error('Error:', error);
  console.log('Current directory:', process.cwd());
}
