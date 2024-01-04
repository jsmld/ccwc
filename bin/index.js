#!/usr/bin/env node
import arg from 'arg'
import fs from 'fs'

try {
  const args = arg({
    "-c": String,
    "-l": String
  })

  const bytesFileName = args['-c']
  const linesFileName = args['-l']

  if (bytesFileName) {
    console.log(fs.statSync(bytesFileName).size, bytesFileName)
  }
  if (linesFileName) {
    console.log(fs.readFileSync(linesFileName).toString().split('\n').length - 1, linesFileName)
  }
} catch (error) {
  console.error(error.message)
}