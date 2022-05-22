const { sign, verify } = require("jsonwebtoken")

const generateAccessToken = async (data) => {
    const accessToken = sign({ data }, process.env.JWT_ACCESS_KEY, { expiresIn: '1h' })
    return accessToken
}

const generateRefreshToken = (data, res) => {
    const refreshToken = sign({ data }, process.env.JWT_REFRESH_KEY, { expiresIn: '9d' })
    res.cookie("refresh_token", refreshToken, { httpOnly: true, path: '/refresh_token' })
    return refreshToken
}

module.exports = {
    generateRefreshToken,
    generateAccessToken
}