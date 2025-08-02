import { run as jscodeshift } from 'jscodeshift/src/Runner';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to the transform script
const transformPath = resolve(__dirname, '../scripts/transform.js');

// Path to the src directory
const srcPath = resolve(__dirname, '../src');

// Options for jscodeshift
const options = {
  dry: false,
  print: true,
  verbose: 1,
  extensions: 'ts,tsx', // Only process .ts and .tsx files
  parser: 'tsx', // Use the tsx parser for TypeScript files
  ignore: ['node_modules/**/*'], // Ignore node_modules
};

console.log('Starting import path cleanup...');
console.log(`Transform: ${transformPath}`);
console.log(`Target directory: ${srcPath}`);

try {
  const result = await jscodeshift(transformPath, [srcPath], options);

  console.log('\nTransformation complete!');
  console.log('Stats:', JSON.stringify(result.stats, null, 2));
  console.log(`Time elapsed: ${result.timeElapsed}s`);
  console.log(`Files processed: ${result.stats.processed || 0}`);
  console.log(`Files modified: ${result.stats.modified || 0}`);

  if (result.error > 0) {
    console.error(`Errors encountered: ${result.error}`);
    process.exit(1);
  }
} catch (error) {
  console.error('Error running transformation:', error);
  process.exit(1);
}
