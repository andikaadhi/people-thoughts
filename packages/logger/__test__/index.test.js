const logger = require('../index.js')

test("Logger test",()=>{
    logger.error({
        message : "Testing logger"
    })
})