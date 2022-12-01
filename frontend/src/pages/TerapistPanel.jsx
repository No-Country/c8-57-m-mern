import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import logo from '../image/imagen_logotipo.png';

const TerapistPanel = () => {
  const information = [
    {
      status: true,
      identificador: 3,
      medico: 'adsdlLAlsS23MaSL',
      fecha: '2022-10-28',
      descripcion: 'Hello mi name is',
    },
  ];

  return (
    <div className="flex w-screen text-fourth sm:pl-20 overflow-hidden">
      <div className="h-screen">
        <div className="h-full  w-60 p-3 flex flex-col shadow-lg shadow-seventh  gap-5">
          <div className="flex justify-center items-center gap-4">
            <img className="w-20" src={logo} />
            <h3 className="text-xl">Panel</h3>
          </div>
          <div>
            <h2 className="text-fourth text-3xl">Menu</h2>
          </div>
          <div className="flex gap-3 hover:bg-third p-2 rounded-lg">
            <CgProfile className="text-3xl" />
            <h3 className="text-xl">Perfil</h3>
          </div>
          <div className="flex gap-3 hover:bg-third  p-2 rounded-lg">
            <RiLightbulbFlashLine className="text-fourth text-3xl" />
            <h3 className="text-xl">Historial</h3>
          </div>
          <div className="flex gap-3  hover:bg-third  p-2 rounded-lg">
            <AiOutlinePlusSquare className="text-3xl" />
            <h3 className="text-xl">Consulta</h3>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className=" h-20 flex flex-row items-center justify-end mx-4 mt-4 pr-[5vh] gap-[20vh]">
          <CgProfile className="text-3xl shadow-228b p-1 rounded-full hover:text-third hover:scale-[1.2]" />
          <AiOutlinePlusSquare className="text-3xl shadow-228b p-1 rounded-full hover:text-third hover:scale-[1.2]" />
          <RiLightbulbFlashLine className="text-3xl shadow-228b p-1 rounded-full hover:text-third hover:scale-[1.2]" />
        </div>
        <div className="mt-4 flex flex-col justify-center ">
          <h3 className="text-3xl px-2 py-4 ml-4">Consultas</h3>
          <div className="w-full flex justify-left mb-10 ml-4">
            <table className=" w-[80%] flex flex-col justify-left items-left text-xl text-center ">
              <tr className="flex justify-center  w-full ">
                <td className="w-1/5 py-4 border-r-[1px] border-secondary">
                  Status
                </td>
                <td className="w-1/5 py-4 border-r-[1px] border-secondary">
                  Identificador
                </td>
                <td className="w-1/5 py-4 border-r-[1px] border-secondary">
                  Medico
                </td>
                <td className="w-1/5 py-4 border-r-[1px] border-secondary">
                  Fecha
                </td>
                <td className="w-1/5 py-4 border-r-[1px] border-secondary">
                  Motivo
                </td>
              </tr>
              {information.map((element) => (
                <tr className="flex justify-center w-full items-center ">
                  <td className="w-1/5 flex items-center justify-center  h-[20px]">
                    <span
                      className={`rounded-full  w-[10px] h-[10px] ${
                        element.status ? 'bg-[green]' : 'bg-[red]'
                      }`}
                    ></span>
                  </td>
                  <td className="w-1/5">{element.identificador}</td>
                  <td className="w-1/5">{element.medico}</td>
                  <td className="w-1/5">{element.fecha}</td>
                  <td className="w-1/5">{element.descripcion}</td>
                </tr>
              ))}
            </table>
          </div>
          <button
            type="submit"
            className="m-auto bg-third hover:scale-[1.1] px-4 py-2 rounded-lg duration-75 active:translate-y-[2px] shadow-228b"
          >
            Nueva Consulta
          </button>
        </div>
      </div>
    </div>
  );
};

export default TerapistPanel;
