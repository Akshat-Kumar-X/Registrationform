import mongoose from 'mongoose'
import 'dotenv/config'

export const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('Connected To Database Succesfully..')
    }
    catch (error) {
        console.log(error.message)
    }
}
