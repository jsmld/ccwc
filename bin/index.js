#!/usr/bin/env node
import arg from 'arg'
import fs from 'fs'

function byteCount (fileName) {
  return fs.statSync(fileName).size
}

function lineCount (fileName) {
  return fs.readFileSync(fileName).toString().split('\n').length - 1
}

function wordCount (fileName) {
  return fs.readFileSync(fileName).toString().trim().split(/\s+/).length
}

function charCount (fileName) {
  return fs.readFileSync(fileName).toString().split('').length
}

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
  const defaultFileName = process.argv[2]

  if (bytesFileName) {
    console.log(byteCount(bytesFileName) + ` ${bytesFileName}`)
  }
  if (linesFileName) {
    console.log(lineCount(linesFileName) + ` ${linesFileName}`)
  }
  if (wordsFileName) {
    console.log(wordCount(wordsFileName) + ` ${wordsFileName}`)
  }
  if (charsFileName) {
    console.log(charCount(charsFileName) + ` ${charsFileName}`)
  }
  if (process.argv.length == 3) {
    console.log(byteCount(defaultFileName), lineCount(defaultFileName), wordCount(defaultFileName), defaultFileName)
  }
} catch (error) {
  console.error(error.message)
}
