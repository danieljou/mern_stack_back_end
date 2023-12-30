import express from 'express'

import dotenv from "dotenv";
import connectDatabase from './config/database.js';

dotenv.config()
connectDatabase()
const app = express()
const port = 3000


app.listen(
    port, () =>
    console.log(`Server is runnig on port  ${port}!`)
)