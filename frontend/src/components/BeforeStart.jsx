import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BeforeStart = () => {

    const [active, setActive] = useState(true)
    const activate = () => {
        setActive(!active)
    }
    useEffect(()=>{
        console.log(active);

    },[active])
  return (
    <div className='bg-[#3D6487] relative h-screen max-h-screen w-screen flex flex-col  pt-[2rem] items-center gap-[5vh] text-[white] text-xl'>
        <div className='bg-[#F4717F] rounded-[50%] w-[230px] h-[230px] flex justify-center items-center px-2 animate-ext-slow box-border'>
            <h2 className='text-[clamp(1rem,5vw,2.5rem)] text-center'>Antes <br  /> de <br /> empezar</h2>
        </div>
        <div className='flex flex-col pt-[2rem] items-center gap-[10vh] text-[white] text-xl '>
        
        <div className=' px-4 text-center mx-auto max-w-md text-base '>
            <p className='text-[clamp(.7rem,5vw,1.4rem)] '>Me gustaria preguntarte como te va en el día y ayudarte con recordatorios.</p>
            <p className='text-[clamp(.7rem,5vw,1.4rem)]'>Para eso necesitas activar las notificaciones</p>
        </div>

        <div  className='flex flex-col justify-center items-center gap-8'>
            <h3 className='text-lg '>Me ayuda a ayudarte</h3>
            <button className='bg-[#F4717F] px-3 py-1 rounded-[50px] text-[16px] shadow-228b active:translate-y-2' onClick={activate}>Claro que si</button>
        </div>
       
        </div>
        <div className="text-[#B1C0CE] absolute bottom-16 left-2/4 translate-x-[-50%]">
            <Link to='/home'>
            <p className="underline text-base">No por ahora</p>
            </Link>
        </div>
        <div className={`w-screen h-screen top-0 absolute backdrop-blur-sm bg-transparent ${active && 'hidden'}`} onClick={activate}>
        <div className='absolute bg-[#CACED3] text-black flex flex-col justify-center items-center p-4 rounded-lg px-8 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-10 text-center' >
            <h3 className='text-center'>Perimitir que Fame envie <br/> notificaciones</h3>
            <p className='text-sm mt-2'>Banners,alertas y globos</p>
            <Link to='/home' className='mt-6'>
                <h4 className='text-[#4396F1]'>Permitir</h4>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default BeforeStart