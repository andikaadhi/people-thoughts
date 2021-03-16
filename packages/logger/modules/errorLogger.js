const { createLogger, format, transports } = require('winston')
const { combine, timestamp, label, printf } = format

const errFormat = printf(({ level, label, timestamp, ...info }) => {
    return `${timestamp} ${label} [${level}] : ${info.name} ${info.message} ${info.stack}`
})

/**
 * @param {String} name
 * @param {String} message
 * @param {String} stack
 */
const errLogger = createLogger({
    format: combine(
        label({ label: 'Error' }),
        format.colorize(),
        timestamp(),
        format.align(),
        errFormat
    ),
    transports: [new transports.Console()]
})

module.exports = errLogger
