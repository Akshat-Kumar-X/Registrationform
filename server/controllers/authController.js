import User from '../models/User.js'
import { hashPassword, comparePassword } from '../services/authHelper.js'

export const test = (req, res) => {
    console.log('test is working')
}

export const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body

        if (!firstName) return res.send({ error: 'First Name Required' })
        if (!lastName) return res.send({ error: 'Last Name Required' })
        if (!password || password.length < 6) 
            return res.send({ error: 'Password should have atleast 6 Characters' })
        
        const exist = await User.findOne({email})
        if (exist) return res.send({ error: 'Email already in use'})

        const hashedPassword = await hashPassword(password)
        const user = User.create({ firstName, lastName, email, password : hashedPassword })
        return res.send(user);

    } catch (error) {
        console.log( error.message )
    }
}

export const loginUser = async ( req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user) return res.send({ error: 'Invalid email or password' })

        const validPassword = await comparePassword( password, user.password )
        if (!validPassword) return res.send({ error: 'Inavlid email or password' })

        return res.send('Login Successfull')

    }
    catch (error) {
        console.log( error.message )
    }
}