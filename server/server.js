import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config({quiet: true})
const app = express()
app.use(cors())

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT)
})