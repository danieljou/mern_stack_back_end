import express from 'express'

import dotenv from "dotenv";
import connectDatabase from './config/database.js';
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js'
dotenv.config()
connectDatabase()
const app = express()
const port = 5000


app.get('/',(req, res) => {
    res.json({message : 'Hello World !'});
})
app.use(express.json())
app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)

app.listen(
    port, () =>
    console.log(`Server is runnig on  http://localhost:${port}`)
)