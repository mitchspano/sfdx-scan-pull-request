// @flow
import fs from 'fs'
import path from 'path'
import byline from 'byline'

const LOG_CHOPPER_MAX = parseInt(process.env.LOG_CHOPPER_MAX || 100000)

/**
 * Utility for truncating logs
 * @class
 */
export default class LogChopper {
  /**
   * truncates a log file
   * @param {string} filepath - log path
   * @example
   * ```js
   * const chopper = require('log-chopper')
   * await chopper.chop('/path/to/log')
   * ```
   */
  static chop (filepath: string, logLineMax: number = LOG_CHOPPER_MAX) {
    return new Promise((resolve, reject) => {
      let file = path.normalize(filepath)
      let lines = []
      let fileStream = fs.createReadStream(filepath, {encoding: 'utf8'})
      fileStream.on('error', reject)
      let stream = byline(fileStream)
      stream.on('error', reject)
      stream.on('data', line => {
        if (lines.length >= logLineMax) stream.end()
        else lines.push(line)
      })
      stream.on('end', () => {
        fs.writeFileSync(file, lines.join('\n'))
        resolve()
      })
    })
  }
}
