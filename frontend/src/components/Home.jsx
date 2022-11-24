import React, { useState } from "react";
import {
  BsEmojiLaughing,
  BsEmojiNeutral,
  BsEmojiFrown,
  BsEmojiAngry,
  BsEmojiSmile,
} from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { HiOutlineChat } from "react-icons/hi";
import { FaBriefcaseMedical, FaQuestion } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ImagePerfil from "../image/imagen_logotipo.png";

function Home() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [onChange, setOnChange] = useState(new Date());
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="container m-auto">
      <div className="bg-[#3d6487] flex flex-col gap-3 w-full relative sm:gap-2">
        {/* Caja principal, donde contiene la imagen, el SOS, y el boton */}
        <div className=" flex gap-2  border-b-[#597a97] border-t-[#597a97] border-b-2 relative pb-3 sm:justify-end  sm:grid sm:grid-cols-3 sm:gap-2 sm:p-3 sm:my-5">
          <div className="w-2/4">
            <img
              className="w-full rounded-lg"
              src={ImagePerfil}
              alt="image_perfil"
            />
          </div>

          <div className="flex flex-col w-2/3 gap-2 justify-between sm:w-full sm:justify-around sm:gap-3">
            <h3 className="text-xs my-px text-fourth">Hola, Ana</h3>
            <span className="block  text-xs text-fourth">
              ¿Como te sientes?
            </span>
            <button
              type="submit"
              className=" text-xs rounded-2xl bg-[#f4717f] p-2 cursor-pointer"
            >
              <span className="w-full text-fourth">Hablar ahora</span>
            </button>
          </div>

          <div className="text-white w-1/3 sm:w-full sm:flex justify-end">
            <button
              type="submit"
              className="rounded-2xl border-red-500 border-2 p-1 w-1/3 absolute sm:w-1/4 text-fourth "
            >
              sos
            </button>
          </div>
        </div>

        {/* Caja numero dos, contiene las reacciones con el calendatio */}

        <div
          className={
            showCalendar
              ? "flex flex-col gap-3 h-auto p-1"
              : "duration-300 p-1 flex flex-col gap-3 h-20 overflow-hidden"
          }
        >
          <div>
            <span className="text-fourth">¿Quieres registrar tu emocion?</span>
          </div>
          <div className="flex justify-around text-fourth">
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
            <button
              type="submit"
              onClick={handleClick}
              className={
                showCalendar
                  ? "focus:rotate-180 ease-in duration-300"
                  : "rotate-0 ease-in duration-300"
              }
            >
              {" "}
              <IoIosArrowDown className="text-3xl" />{" "}
            </button>
          </div>
          <div className="relative flex items-center justify-center">
            <Calendar
              className={
                showCalendar
                  ? "text-center bg-transparent ease-linear delay-150 duration-200 border-none"
                  : "opacity-0 ease-in  duration-500 delay-500"
              }
              onChange={setOnChange}
              value={onChange}
            />
          </div>
        </div>

        {/* Seccion para ti, slider de imagenes */}
        <div className=" p-1  h-auto w-full">
          <div>
            <h3 className="text-fourth">Para ti</h3>
          </div>
          <div>
            <span className="text-right text-fourth block">Ver mas</span>
          </div>
        </div>
        <div className="w-full overflow-y-auto over order-b-[#597a97] border-b-[#597a97] border-t-[#597a97] border-b-2 sm:overflow-hidden">
          <div
            className="flex p-2 gap-4 sm:flex-wrap sm:mx-6 sm:justify-center"
            style={{ width: "600px" }}
          >
            <div className="h-24 w-56 bg-cover bg-center bg-[url('./image/imagen_1.jpeg')] block rounded-t-xl sm:bg-center sm:h-32 sm:rounded-none" />
            <div className="h-24 w-56 bg-cover bg-center bg-[url('./image/imagen_2.jpeg')] block rounded-t-xl sm:bg-center sm:h-32 sm:rounded-none" />
            <div className="h-24 w-56 bg-cover bg-center bg-[url('./image/imagen_3.jpeg')] block rounded-t-xl sm:bg-center sm:h-32 sm:rounded-none" />
            <div className="h-24 w-56 bg-cover bg-center bg-[url('./image/imagen_4.jpeg')] block rounded-t-xl sm:bg-center sm:h-32 sm:rounded-none mb-5" />
          </div>
        </div>

        {/* Seccion de tu terapeuta ideal, contiene una imagen y un boton hacia otra direccion */}

        <div className="border-b-[#597a97] border-t-[#597a97] border-b-2 my-2 mx-2">
          <h2 className="block p-0 text-fourth">Tu terapeuta ideal</h2>
          <div className="flex text-center gap-2 justify-center items-center my-10 sm:w-full sm:justify-around">
            <div className="w-1/4 flex flex-col items-center">
              <FaQuestion className="text-4xl text-[#f4717f]" />
              <span className="text-sm text-fourth">En espera...</span>
            </div>
            <div className="w-4/4 text-base flex flex-col  p-2 gap-3">
              <div>
                <h3 className="text-sm text-fourth">
                  No hay proximas seciones
                </h3>
                <span className="text-sm text-fourth">
                  ¿Te gustaria programar una?
                </span>
              </div>
              <div>
                <button
                  type="submit"
                  className=" bg-third p-2 cursor-pointer text-fourth  rounded-2xl text-white text-sm"
                >
                  {" "}
                  Programar ahora{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Caja de resumen de emociones, contiene emociones, boton de terapeuta */}

        <div className=" text-fourth flex flex-col gap-4 p-2 text-center text-white mb-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-left">Resumen de emociones</h2>
            <span className="text-sm">
              El mejor proceso es el que nunca se detiene te has sentido mejor
              4/7 dias
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
            <button
              type="submit"
              className="w-2/4 bg-red-400 p-2 rounded-2xl bg-third text-xs sm:w-1/4 sm:p-3"
            >
              Encontrar terapeuta
            </button>
          </div>
        </div>

        {/* Caja con redireccionamiento, homr, chat, tienda, para ti, perfil */}
        <div
          className={`flex bg-[#597a97] relative top-4 left-0 p-1 px-25  justify-around text-fourth sm:duration-150 sm:flex-col sm:fixed sm:left-0 sm:h-screen sm:items-center sm:top-0 sm:gap-5 sm:justify-center ${
            showMenu ? "sm:w-60" : "sm:w-10"
          }`}
        >
          <button
            type="submit"
            className={`hidden sm:absolute sm:top-2  sm:text-2xl sm:block sm:duration-150 sm:cursor-pointer  ${
              showMenu && "rotate-180 left-3/4"
            }`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <IoIosArrowForward className="text-third" />
          </button>
          <div className="flex flex-col items-center cursor-pointer sm:flex-row sm:justify-around sm:w-full sm:hover:bg-primary sm:p-2 rounded-md">
            <GoHome className="text-[#f4717f] text-2xl" />
            <h3 className={`${!showMenu && "sm:hidden"}`}>Home</h3>
          </div>
          <div className="flex flex-col items-center cursor-pointer sm:flex-row sm:justify-around sm:w-full sm:hover:bg-primary sm:p-2 rounded-md">
            <HiOutlineChat className="text-[#f4717f] text-2xl" />
            <h3 className={`${!showMenu && "sm:hidden"}`}>Chat</h3>
          </div>
          <div className="flex flex-col items-center cursor-pointer sm:flex-row sm:justify-around sm:w-full sm:hover:bg-primary sm:p-2 rounded-md">
            <FaBriefcaseMedical className="text-[#f4717f] text-2xl" />
            <h3 className={`${!showMenu && "sm:hidden"}`}>Terapia</h3>
          </div>
          <div className="flex flex-col items-center cursor-pointer sm:flex-row sm:justify-around sm:w-full sm:hover:bg-primary sm:p-2 rounded-md">
            <RiLightbulbFlashLine className="text-[#f4717f] text-2xl" />
            <h3 className={`${!showMenu && "sm:hidden"}`}>Para ti</h3>
          </div>
          <div className="flex flex-col items-center cursor-pointer sm:flex-row sm:justify-around sm:w-full sm:hover:bg-primary sm:p-2 rounded-md">
            <AiOutlineUser className="text-[#f4717f] text-2xl" />
            <h3 className={`${!showMenu && "sm:hidden"}`}>Perfil</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
