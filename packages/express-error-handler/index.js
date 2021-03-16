const errorLogger = require('@people/logger/modules/errorLogger')
/**
 * @description Express middleware unexpected and response 500 http error
 * @param {*} err error object passed
 * @param {*} req express request object
 * @param {*} res express response object
 * @param {*} next
 */
module.exports = (err, req, res, next) => {
    try {
        if (err)
            errorLogger.error({
                type: 'error',
                message: err.message,
                stack: err.stack
            })
    } catch (err) {
        errorLogger.error({
            type: 'error',
            message: err.message,
            stack: err.stack
        })
    }
    res.sendStatus(500)
}
