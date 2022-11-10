import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import cors from 'cors'

const app=express()
app.use(express.json())
dotenv.config()
//Conexion a la base de datos
connectDB()

app.use(morgan('dev'))
app.use(cors())

//comenta

const PORT= process.env.PORT || 4000

const server=app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})