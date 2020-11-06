const { hashSync } = require('bcrypt')
const bcrypt = require('bcryptjs')

module.exports = {

    register: async (req, res) => {
        const db = req.app.get('db')

        const {username, password} = req.body
        const [user] = await db.check_user([username])

        if (user) {
            return res.status(409).send('User already exists')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const [newUser] = await db.register_user([username, hash])

        res.status(200).send(newUser)


    },

}