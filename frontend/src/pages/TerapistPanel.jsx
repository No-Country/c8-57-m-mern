import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { GrDocumentText } from 'react-icons/gr';
import { AiOutlinePlusSquare } from 'react-icons/ai';
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
    <div className="flex w-full justify-between">
      <div className="h-screen">
        <div className="h-full bg-fifth w-60 p-2 flex flex-col gap-5">
          <div className="flex justify-center items-center gap-4">
            <img className="w-20" src={logo} />
            <h3>Panel</h3>
          </div>
          <div>
            <h2 className="text-fourth text-2xl">Menu</h2>
          </div>
          <div className="flex gap-3">
            <CgProfile />
            <h3>Perfil</h3>
          </div>
          <div className="flex gap-3">
            <GrDocumentText />
            <h3>Historial</h3>
          </div>
          <div className="flex gap-3  rounded-lg p-2 items-center">
            <AiOutlinePlusSquare className="text-xl" />
            <h3>Consulta</h3>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="bg-primary h-20">
          <h3>Panel</h3>
        </div>
        <div>
          <h3>Consultas</h3>
          <div className="w-full flex justify-center">
            <table className=" w-full flex flex-col justify-center">
              <tr className="flex justify-center  w-full">
                <td className="w-1/5">Status</td>
                <td className="w-1/5">Identificador</td>
                <td className="w-1/5">Medico</td>
                <td className="w-1/5">Fecha</td>
                <td className="w-1/5">Motivo</td>
              </tr>
              {information.map((element) => (
                <tr className="flex justify-center w-full items-center">
                  <td className="w-1/5">
                    <span
                      className={`rounded-full  w-1/2 h-1/2  ${
                        element.status ? 'bg-fourth' : 'bg-third'
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
        </div>
      </div>
    </div>
  );
};

export default TerapistPanel;
