import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import connectDB from './config/db';
import passport from 'passport';
import passportMiddleware from './middleware/passport';
import registerRoute from './routes/registerRoute';
import loginRoute from './routes/userRoute'
import userRoute from './routes/userRoute'
const app=express()
dotenv.config()

connectDB() //Conexion a la base de datos

//Middlewares
app.use(express.json()) //middleware que transforma la req.body a un json
app.use(morgan('dev')); // Mostrar peticiones
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(passport.initialize());
passport.use(passportMiddleware);



const PORT= process.env.PORT || 4000

const server=app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})

app.use('/register',registerRoute)
app.use('/login',loginRoute)
app.use('/user', userRoute)