import React, { useState } from 'react';
import {
  BsEmojiLaughing, BsEmojiNeutral, BsEmojiFrown, BsEmojiAngry, BsEmojiSmile,
} from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { GoHome } from 'react-icons/go';
import { HiOutlineChat } from 'react-icons/hi';
import { FaBriefcaseMedical, FaQuestion } from 'react-icons/fa';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ImagePerfil from '../image/imagen_perfil.jpg';

function Home() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [onChange, setOnChange] = useState(new Date());

  const handleClick = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="grid bg-[#3d6487]  grid-cols-1 gap-3">
      {/* Caja principal, donde contiene la imagen, el SOS, y el boton */}
      <div className="mt-5 mx-2 flex gap-2 border-b-[#597a97] border-t-[#597a97] border-b-2 pb-2">
        <div className="w-1/4">
          <img className="w-full rounded-lg" src={ImagePerfil} alt="image_perfil" />
        </div>

        <div className="flex flex-col  text-white">
          <h3 className="text-sm my-px">Hola, Ana</h3>
          <span className="block  text-sm max-w-max">¿Como te sientes?</span>
          <button type="submit" className="my-1 text-sm rounded-2xl bg-[#f4717f] p-2 cursor-pointer"><span>Hablar ahora</span></button>
        </div>

        <div className="text-white w-1/3">
          <button type="submit" className="rounded-2xl border-red-500 border-2 p-1 w-full">sos</button>
        </div>
      </div>

      {/* Caja numero dos, contiene las reacciones con el calendatio */}

      <div className={showCalendar ? 'flex flex-col gap-3 h-auto p-1' : 'duration-300 p-1 flex flex-col gap-3 h-20 overflow-hidden'}>
        <div>
          <span className="text-white">¿Quieres registrar tu emocion?</span>
        </div>
        <div className="flex justify-around text-white">
          <div>
            <BsEmojiLaughing className="text-3xl" />
          </div>
          <div>
            <BsEmojiNeutral className="text-3xl" />
          </div>
          <div>
            <BsEmojiFrown className="text-3xl" />
          </div>
          <div>
            <BsEmojiAngry className="text-3xl" />
          </div>
          <div>
            <BsEmojiSmile className="text-3xl" />
          </div>
          <button type="submit" onClick={handleClick} className={showCalendar ? 'focus:rotate-180 ease-in duration-300' : 'rotate-0 ease-in duration-300'}>
            {' '}
            <IoIosArrowDown className="text-3xl" />
            {' '}
          </button>
        </div>
        <div className="relative flex items-center justify-center text-white">
          <Calendar className={showCalendar ? 'text-center bg-transparent ease-linear delay-150 duration-200 border-none' : 'opacity-0 ease-in  duration-500 delay-500'} onChange={setOnChange} value={onChange} />
        </div>
      </div>

      {/* Seccion para ti, slider de imagenes */}
      <div className=" p-1  h-auto w-full">
        <div>
          <h3 className="text-white">Para ti</h3>
        </div>
        <div>
          <span className="text-right text-white block">Ver mas</span>
        </div>
      </div>
      <div className="w-full overflow-y-auto order-b-[#597a97] border-b-[#597a97] border-t-[#597a97] border-b-2">
        <div className="flex p-2 gap-4 " style={{ width: '700px' }}>
          <div className="h-24 w-56 bg-cover bg-center bg-[url('./image/imagen_1.jpeg')] block rounded-t-xl" />
          <div className="h-24 w-56 bg-cover bg-center bg-[url('./image/imagen_2.jpeg')] block rounded-t-xl" />
          <div className="h-24 w-56 bg-cover bg-center bg-[url('./image/imagen_3.jpeg')] block rounded-t-xl" />
          <div className="h-24 w-56 bg-cover bg-center bg-[url('./image/imagen_4.jpeg')] block rounded-t-xl mb-5" />
        </div>
      </div>

      {/* Seccion de tu terapeuta ideal, contiene una imagen y un boton hacia otra direccion */}

      <div className="border-b-[#597a97] border-t-[#597a97] border-b-2 my-2 mx-2 text-white">
        <h2 className="block p-0">Tu terapeuta ideal</h2>
        <div className="flex text-center gap-2 justify-center items-center my-10">
          <div className="w-1/4 flex flex-col items-center">
            <FaQuestion className="text-4xl text-[#f4717f]" />
            <span>En espera...</span>
          </div>
          <div className="w-4/4 text-base flex flex-col  p-2 gap-3">
            <div>
              <h3>No hay proximas seciones</h3>
              <span>¿Te gustaria programar una?</span>
            </div>
            <div>
              <button type="submit" className="p-2 cursor-pointer bg-red-400 rounded-2xl text-white"> Programar ahora </button>
            </div>
          </div>
        </div>
      </div>

      {/* Caja de resumen de emociones, contiene emociones, boton de terapeuta */}

      <div className=" flex flex-col gap-4 p-2 text-center text-white mb-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-left">Resumen de emociones</h2>
          <span>
            El mejor proceso es el que nunca se detiene te has sentido mejor 4/7 dias
          </span>
        </div>
        <div className="text-right">
          <span className="cursor-pointer">Ver mas</span>
        </div>
        <div className="flex justify-around">
          <div className="cursor-pointer">
            <span>L</span>
            <BsEmojiLaughing className="text-2xl" />
          </div>
          <div className="cursor-pointer">
            <span>M</span>
            <BsEmojiNeutral className="text-2xl" />
          </div>
          <div className="cursor-pointer">
            <span>M</span>
            <BsEmojiFrown className="text-2xl" />
          </div>
          <div className="cursor-pointer">
            <span>J</span>
            <BsEmojiAngry className="text-2xl" />
          </div>
          <div className="cursor-pointer">
            <span>V</span>
            <BsEmojiSmile className="text-2xl" />
          </div>

          <div className="cursor-pointer">
            <span>S</span>
            <BsEmojiLaughing className="text-2xl" />
          </div>
          <div className="cursor-pointer">
            <span>D</span>
            <BsEmojiNeutral className="text-2xl" />
          </div>
        </div>
        <div className="flex flex-col gap-4  items-center">
          <span>¿Te gustaria empezar terapia?</span>
          <button type="submit" className="w-2/4 bg-red-400 p-2 rounded-2xl">Encontrar terapeuta</button>
        </div>
      </div>

      {/* Caja con redireccionamiento, homr, chat, tienda, para ti, perfil */}
      
      <div className="flex bg-[#597a97] p-1 justify-around text-white">
        <div className="flex flex-col items-center cursor-pointer">
          <GoHome className="text-[#f4717f] text-2xl" />
          <h3>Home</h3>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <HiOutlineChat className="text-[#f4717f] text-2xl" />
          <h3>Chat</h3>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <FaBriefcaseMedical className="text-[#f4717f] text-2xl" />
          <h3>Terapia</h3>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <RiLightbulbFlashLine className="text-[#f4717f] text-2xl" />
          <h3>Para ti</h3>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <AiOutlineUser className="text-[#f4717f] text-2xl" />
          <h3>Perfil</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
