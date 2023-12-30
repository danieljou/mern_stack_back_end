

import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
export const signup = async (req, res) => {
    const { username, email, password } = req.body
    const hasdedPassword = await bcryptjs.hash(password, 10)
    const newUser = new User({ username, email, password: hasdedPassword })
    try {
        
        await newUser.save()
        res.status(201)
        .json({ messsage: 'user created successfully' })
    } catch (error) {
        res.status(500).json({ messsage:`Internal Server Error ${error}` })
    }
    

}