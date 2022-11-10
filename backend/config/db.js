import mongoose from "mongoose";

const connectDB= async()=>{
    //Hay que crear una cuenta en MongoDB para hacer la conexion
    // try {
    //     const connection=await mongoose.connect(process.env.MONGO_URI,{
    //         useNewUrlParser: true,
    //         useUnifiedTopology:true, 
    //     })
    //     const url=`${connection.connection.host}:${connection.connection.port}`
    //     console.log(`MongoDB Conectado en ${url} `)
    // } catch (error) {
    //     console.log(`error: ${error.message}`)
    // }
}

export default connectDB