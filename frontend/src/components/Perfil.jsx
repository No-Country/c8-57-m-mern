/* eslint-disable no-console */
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import useAuth from '../hooks/useAuth';
import { FaTrash } from 'react-icons/fa';
function Perfil() {
  // const userDeleted = axiosClient.delete('user/', + userStorage._id)

  const handleSubmit = () => {
    toast.success('Usuario editado exitosamente!');
  };
  const { user } = useAuth();
  console.log(user);
  const profileSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Nombre muy corto!')
      .max(15, 'Nombre demasiado largo!')
      .required('No puedes dejar este espacio en blanco!')
      .matches(/^[A-Z _]+$/i, 'El nombre solo puede contener letras'),
    lastName: Yup.string()
      .min(3, 'Apellido muy corto!')
      .max(15, 'Apellido demasiado largo!')
      .required('No puedes dejar este espacio en blanco!')
      .matches(/^[A-Z _]+$/i, 'El apellido solo puede contener letras'),
    nickname: Yup.string()
      .min(3, 'Nickname muy corto!')
      .max(15, 'Nickname demasiado largo!'),
  });

  return (
    <div className="flex flex-col p-8 w-[90%] lg:w-1/2">
      <div className="bg-secondary p-8 shadow-md shadow-secondary rounded-xl ">
        <header className="flex items-center  justify-center pt-2 pb-4">
          <h2 className="text-2xl font-bold text-[#ffffff]">
            Edita tu Perfil{' '}
          </h2>
        </header>
        <Formik
          initialValues={user}
          enableReinitialize
          onSubmit={handleSubmit}
          validationSchema={profileSchema}
        >
          <Form className="flex flex-col w-[90%]">
            <label htmlFor="name" className="font-bold  block text-[#ffffff]">
              {' '}
              Nombre
            </label>
            <Field
              name="name"
              id="name"
              type="text"
              className="px-3 w-full py-2 focus: outline-none rounded"
            />
            <ErrorMessage name="name" component="p" />
            <label
              htmlFor="nickname"
              className="font-bold  block text-[#ffffff]"
            >
              {' '}
              Apodo(opcional)
            </label>
            <Field
              name="nickname"
              id="nickname"
              type="text"
              placeholder="Ingresa tu apodo"
              className="px-3 py-2 focus: outline-none rounded w-full "
            />
            <ErrorMessage name="nickname" component="p" />
            <div className="flex justify-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className=" w-full lg:w-1/2 text-lg py-2  mb-4 bg-third rounded-lg text-gray-800 font-bold active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#b1656c]  disabled:cursor-not-allowed text-[#ffffff] mt-4"
              >
                Confirmar
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          // onClick={handleDelete}
          className=" w-full lg:w-1/3 text-lg py-2  mb-4 bg-eighth rounded-lg text-gray-800 font-bold active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#b1656c]  disabled:cursor-not-allowed text-[#ffffff] mt-4"
        >
          Eliminar Usuario
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default Perfil;
