import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
function ModalFeelings({ handleModal }) {
  const numberArrFeelings = [1, 2, 3, 4, 5, 6, 7, 8];
  const numberArrFeelingsTwo = [1, 2, 3, 4, 5, 6, 7, 8];
  const fellingsOptionsTwo = [
    'familia',
    'trabajo',
    'amistades',
    'estudios',
    'productividad',
    'descanso',
    'alimentación',
    'pareja/ex',
    'conmigo',
  ];
  const fellingsOptions = [
    'triste',
    'sola',
    'desesperanzada',
    'abrumada',
    'decepcionada',
    'dolida',
    'melalcolica',
    'miserable',
    'arrepentida',
  ];

  return (
    <div className="flex flex-col bg-fifth p-3 gap-3 z-10  fixed justify-center rounded-lg m-2">
      <div className="absolute top-1 right-1">
        <AiFillCloseCircle onClick={handleModal} className="text-2xl text-third cursor-pointer" />
      </div>
      <div>
        <h2 className="text-fourth text-center text-2xl mt-4">
          Entiendo que no te sientes bien, ¿que emociones lo describen mejor?
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-fourth text-lg">Emociones</h3>
        </div>
        <div className="flex justify-center w-full">
          <input
            className="w-full bg-secondary p-1 rounded-lg outline-none"
            type="text"
            name="search"
            placeholder="buscar mas tags"
          />
        </div>
        <div className="flex gap-3 flex-wrap justify-center">
          {numberArrFeelings.map((button) => (
            <button key={button} type="submit" className="p-2 rounded-md text-fourth bg-third">
              {fellingsOptions[button - 1]}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-fourth text-lg">Situaciones </h3>
        </div>
        <div>
          <input
            className="w-full bg-secondary rounded-lg p-1 text-seventh"
            type="text"
            name="search"
            placeholder="buscar mas tags"
          />
        </div>
        <div className="flex gap-3 flex-wrap justify-center">
          {numberArrFeelingsTwo.map((button) => (
            <button key={button} type="submit" className="p-2 rounded-md text-fourth bg-third">
              {fellingsOptionsTwo[button - 1]}
            </button>
          ))}
        </div>
      </div>
      <div className="ml-auto p-1">
        <button type="submit" className="bg-third p-1 rounded-lg text-fourth w-24">
          Continuar
        </button>
      </div>
    </div>
  );
}

export default ModalFeelings;
