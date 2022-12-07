import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Feeling from './targets/Feeling';

function Targets() {
  const [firstLogin, setFirstLogin] = useState(0);
  const { putFirstLoginUser, user } = useAuth();
  if (firstLogin == 1) {
    // console.log(user);
    putFirstLoginUser(user.id);
  }
  // console.log(firstLogin);
  return (
    <div className=" m-0 bg-[#3D6487] relative h-[100vh] max-h-screen w-[100vw] flex flex-col items-center , pt-[10vh] gap-[2rem] text-white overflow-hidden text-[white] font-serif ">
      <div className=" top-[0] flex flex-col justify-center items-center gap-4 px-[5px]  sm:gap-2">
        <h2 className=" text-[clamp(1.5rem,7vw,3rem)] w-max h-max">
          Hagamos este espacio tuyo
        </h2>
        <h3 className="text-[clamp(1rem,5vw,2rem)]">
          ¿Qué temas te gustaria tratar?
        </h3>
      </div>

      <div className="w-[clamp(100px,50vw,300px)]  h-[clamp(300px,100vw,400px)] ">
        <Feeling firstLogin={firstLogin} setFirstLogin={setFirstLogin} />
      </div>
      <Link to="/beforeStart" onClick={() => setFirstLogin(1)}>
        <div className="text-[#B1C0CE] absolute bottom-16 left-2/4 translate-x-[-50%]">
          <p className="underline">No por ahora</p>
        </div>
        <button className="absolute right-[20%] bottom-24 text-3xl rounded-[10px] p-4 hover:bg-slate-600">
          {' '}
          ▶{' '}
        </button>
      </Link>
    </div>
  );
}

export default Targets;
