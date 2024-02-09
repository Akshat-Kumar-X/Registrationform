import bcrypt from 'bcrypt'
import 'dotenv/config'

export const hashPassword = async ( password ) => {
    const salt = await bcrypt.genSalt(Number(process.env.SALT))
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
}

export const comparePassword = async ( password, hashedPassword ) => {
    const valid = await bcrypt.compare(password, hashedPassword );
    return valid;
}