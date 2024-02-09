import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { router as authRoutes } from './routes/authRoutes.js'
import { connectToDB } from './config/ConnectToDB.js'

const app = express()

connectToDB();

app.use(express.json())

app.use('/', authRoutes)

const Port = process.env.PORT || 3000

app.listen(Port, (req, res) => {
    console.log(`Server Started Running on port ${Port}`)
})
