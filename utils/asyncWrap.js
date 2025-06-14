function asyncWrap(callback) {
    return function(req, res, next){
        callback(req, res, next)
            .catch((err) => {
                next(err);
            })
    }
}

module.exports = asyncWrap;