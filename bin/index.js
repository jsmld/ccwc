#!/usr/bin/env node
import arg from 'arg'
import fs from 'fs'

try {
  const args = arg({
    "-c": String,
    "-l": String,
    "-w": String,
    "-m": String
  })

  const bytesFileName = args['-c']
  const linesFileName = args['-l']
  const wordsFileName = args['-w']
  const charsFileName = args['-m']

  if (bytesFileName) {
    console.log(fs.statSync(bytesFileName).size, bytesFileName)
  }
  if (linesFileName) {
    console.log(fs.readFileSync(linesFileName).toString().split('\n').length - 1, linesFileName)
  }
  if (wordsFileName) {
    console.log(fs.readFileSync(wordsFileName).toString().trim().split(/\s+/).length, wordsFileName)
  }
  if (charsFileName) {
    console.log(fs.readFileSync(charsFileName).toString().split('').length, charsFileName)
  }
} catch (error) {
  console.error(error.message)
}
