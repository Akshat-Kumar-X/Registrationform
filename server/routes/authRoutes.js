import express from 'express'
import cors from 'cors'
import { test, registerUser, loginUser } from '../controllers/authController.js'

export const router = express.Router();

router.use(
    cors({
        origin: 'http://localhost:3001',
        credentials: true
    })
)

//testing Endpoints
router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)

