#!/usr/bin/env node
import arg from 'arg'
import fs from 'fs'

try {
  const args = arg({
    "-c": String,
  });

  const fileName = args['-c'];

  if (fileName) {
    const stats = fs.statSync(fileName);
    const size = stats.size;
    console.log(size, fileName);
  } else {
    console.error('Please provide a file name to check the size using the -c flag.');
  }
} catch (error) {
  console.error(error.message);
}