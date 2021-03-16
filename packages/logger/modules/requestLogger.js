const { createLogger, format, transports } = require('winston')
const { combine, timestamp, label, printf } = format

const requestFormat = printf(({ level, label, timestamp, ...info }) => {
    return `${timestamp} ${label} [${level}] : ${info.ip} ${info.status} ${info.method} ${info.hostname} ${info.originalUrl} ${info.response_time} ${info.user_agent}`
})

/**
 * @description Log all endpoint requested from client.
 */
const requestLogger = createLogger({
    format: combine(
        label({ label: 'Req' }),
        format.colorize(),
        timestamp(),
        format.align(),
        requestFormat
    ),
    transports: [new transports.Console()]
})
module.exports = requestLogger
