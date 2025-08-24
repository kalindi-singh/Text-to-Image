import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'

const PORT =process.env.PORT || 4000
const app = express()


//middlewares being used
app.use(express.json())
app.get(cors())

await connectDB() //connects our app with mongodb database

app.use('/api/user', userRouter)

app.get('/', (req,res) => {
    res.send("API Working fine okay!")
})

app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
})