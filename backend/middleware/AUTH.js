const { verify } = require("jsonwebtoken")
require("dotenv").config()

const AUTHENTICATE = (req, res, next) => {
    const { authorization } = req.headers

    try {
        if(!authorization) res.status(400).json({error: "Authorization token is required"})

        const token = authorization.split(" ")[1]

        const user = verify(token, process.env.JWT_ACCESS_KEY)
        if(!user) throw new Error("Invalid authorization token")

        req.user = user
        next()
    }

    catch(err) {
        res.status(400).json({error: err.message})
    }
}

module.exports = {
    AUTHENTICATE
}