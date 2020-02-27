const jsonwebtoken = require("jsonwebtoken")
const User = require("../../models/User")


module.exports = function (request, response, next) {
    const token = request.header("token")

    if (token) {
        request.email = jsonwebtoken.verify(token, process.env.TOKEN_SECRET)
        const query = { email: request.email }

        User.findOne(query, (err, res) => {
            if (!err) {
                next() 
            } else {
                response.status(401).json({
                    message: "Access Denied; try signing in again?"
                })
            }
        })
    } else {
        response.status(401).json({
            message: "Access Denied; try signing in again?"
        })
    }
}
