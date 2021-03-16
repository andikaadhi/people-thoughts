const errHandler = require('../index')
test('express error handler test', () => {
    errHandler(
        {
            stack: 'stack',
            message: 'message'
        },
        {},
        { sendStatus: () => {} },
        () => {}
    )
})
