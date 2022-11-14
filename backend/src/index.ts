import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import connectDB from './config/db';

const app=express()
app.use(express.json()) //middleware que transforma la req.body a un json
dotenv.config()

connectDB() //Conexion a la base de datos

app.use(morgan('dev'))
app.use(cors())



const PORT= process.env.PORT || 4000

const server=app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})