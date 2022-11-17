import React from 'react';
import {  Link } from 'react-router-dom';
import Feeling from './targets/Feeling';

function Targets() {
  return (
    <div 
    className="bg-[#3D6487] relative h-screen max-h-screen w-screen flex flex-col justify-center items-center gap-[10vh] text-white"
    >
      <div className='absolute top-24 flex flex-col justify-center items-center gap-2'  >
        <h2 className=" text-3xl w-max h-max p-2">Hagamos este espacio tuyo</h2>
        <h3>¿Que te gustaria tratar?</h3>
      </div>
    
      
      <div>
        <Feeling />
      </div>
      <Link to="/beforeStart">

          
        <div className="text-[#B1C0CE] absolute bottom-16 left-2/4 translate-x-[-50%]" >
          <p className="underline">No por ahora</p>
        </div>
        <button className='absolute right-[20%] bottom-24 text-3xl rounded-[10px] p-4 hover:bg-slate-600'> >></button>
      </Link>

    </div>
  );
}

export default Targets;
