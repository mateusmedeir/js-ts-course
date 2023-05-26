exports.globalMiddleware = (req, res, next) => {
    res.locals.aLocalVariable = 'This is the value of the local variable.'
    next();
}