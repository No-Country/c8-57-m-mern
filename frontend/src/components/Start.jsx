import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div 
    className= " m-0 bg-[#3D6487] relative h-[100vh] max-h-screen w-[100vw] flex flex-col items-center , pt-[10vh] gap-[2rem] text-white overflow-hidden text-[white] font-serif "
    >
      <div className=' top-[0] flex flex-col justify-center items-center gap-4 px-[5px]  sm:gap-2'  >
        <h2 className=" text-[clamp(1.5rem,7vw,3rem)] w-max h-max">Hola soy FAME </h2>
      </div>
      <div className='max-w-[300px] w-[100%] px-[10px]'>
        <img src="src/image/imagen_logotipo.png" />
      </div>
    
      <div className=' top-[0] flex flex-col justify-center items-center gap-4 px-[5px]  sm:gap-2'  >
        <p className=" text-[clamp(1rem,7vw,2rem)] w-screen h-max text-center px-[10px]">Este es un espacio seguro creado para ti</p>
      </div>
     
      <Link to="/login">

        <button className='absolute right-[20%] bottom-24 text-3xl rounded-[10px] p-4 hover:bg-slate-600'> ▶ </button>
      </Link>

    </div>
  )
}

export default Start