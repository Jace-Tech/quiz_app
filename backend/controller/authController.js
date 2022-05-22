const AuthModel = require('../model/Admin')
const { hashSync, compareSync } = require('bcrypt')
const { v4 } = require('uuid')
const {  } = require('../helper/token')
const { generateAccessToken, generateRefreshToken } = require('../helper/token')


const handleRegister = async (req, res) => {
    const { password } = req.body // destructing

    const hashedPassword = hashSync(password, 10)
    const adminId = v4()

    try {
        const admin = await AuthModel.create({
            ...req.body,
            id: adminId,
            password: hashedPassword
        })

        res.status(201).json(admin)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const handleLogin = async (req, res) => {
    const { password, email } = req.body

    try {
        // Check for user
        const admin = await AuthModel.findOne({ 
            where: { email }
        })

        if(!admin) throw new Error(`User not found`)

        if(compareSync(password, admin.password)) {
            const accessToken = await generateAccessToken(admin)
            const refreshToken = generateRefreshToken(admin, res)
            admin.token = refreshToken

            await admin.save()
            res.status(201).json({
                token: accessToken,
                user: admin
            })
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message })
    }
}


module.exports = {
    handleLogin,
    handleRegister
}