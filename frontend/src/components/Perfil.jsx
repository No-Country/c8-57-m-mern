/* eslint-disable no-console */
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import useAuth from '../hooks/useAuth';

function Perfil() {
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
    <div className="bg-secondary p-8 shadow-md shadow-secondary rounded-xl w-full md:m-auto md:w-1/3">
      <header className="flex items-center  justify-center pt-2 pb-4">
        <h2 className="text-2xl font-bold text-[#ffffff]">Edita
         tu Perfil </h2>
      </header>
      <Formik
        initialValues={user}
        enableReinitialize
        onSubmit={handleSubmit}
        validationSchema={profileSchema}
      >
        <Form>
          <label htmlFor="name" className="font-bold  block text-[#ffffff]">
            {' '}
            Nombre
          </label>
          <Field
            name="name"
            id="name"
            type="text"
            className="px-3 py-2 focus: outline-none rounded w-full "
          />
          <ErrorMessage name="name" component="p" />
          <label htmlFor="nickname" className="font-bold  block text-[#ffffff]">
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
          <button
            type="submit"
            onClick={handleSubmit}
            className=" w-full text-lg py-2  mb-4 bg-third rounded-lg text-gray-800 font-bold active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#b1656c]  disabled:cursor-not-allowed text-[#ffffff] mt-4"
          >
            Confirmar
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Perfil;
