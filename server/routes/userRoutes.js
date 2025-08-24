import express from 'express'
import {registerUser,loginUser, userCredits} from '../controllers/userController.js'
import userAuth from '../middlewares/auth.js'

const userRouter = express.Router()

userRouter.post('/register' , registerUser) //localhost:4000/api/user/register
userRouter.post('/login' , loginUser) //localhost:4000/api/user/login
userRouter.post('/credits' , userAuth ,userCredits) //localhost:4000/api/user/credits

export default userRouter

