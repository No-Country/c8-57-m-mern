/* eslint-disable no-console */
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import useAuth from '../hooks/useAuth';
import { FaTrash } from 'react-icons/fa';
import 'yup-phone-lite';
function Perfil() {
  // const userDeleted = axiosClient.delete('user/', + userStorage._id)

  const handleSubmit = () => {
    toast.success('Usuario editado exitosamente!');
  };
  const { user } = useAuth();
  const initialValues = {
    name: {user},
    age: "",
    birthdate: "",
    phone: "",
    location: ""
  };
  console.log(user);
  const profileSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Nombre muy corto!')
      .max(15, 'Nombre demasiado largo!')
      .required('No puedes dejar este espacio en blanco!')
      .matches(/^[A-Z _]+$/i, 'El nombre solo puede contener letras'),
    age: Yup.number()
      .required('Porfavor ingresa tu edad')
      .min(18, 'Debes tener al menos 18 años')
      .max(60, 'Debes tener al menos 60 años'),
    birthdate: Yup.date()
      .max(new Date(Date.now() - 567648000000), 'Debes tener al menos 18 años')
      .required('Required'),
    phone: Yup.string()
      .phone('AR', 'Ingresa un teléfono válido')
      .required('El número telefónico es requerido'),
    location: Yup.object().nullable().shape({
      country: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zipcode: Yup.string().required(),
    }),
  });

  return (
    <div className="flex flex-col p-8 w-full justify-center items-center">
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
              htmlFor="age"
              className="font-bold  block text-[#ffffff]"
            >
              {' '}
              Número Telefónico
            </label>
            <Field
              label="phone"
              type="text"
              name="phone"
              placeholder="Ingresa tu celular"
              className="px-3 py-2 focus: outline-none rounded w-full "
            />
            <ErrorMessage name="phone" component="p" />
            <label
              htmlFor="age"
              className="font-bold  block text-[#ffffff]"
            >
              {' '}
              Fecha de nacimiento
            </label>
            <Field
              label="birthdate"
              type="date"
              name="birthdate"
              min="1990-01-01" max="2022-01-01"
              placeholder="DD/MM/YY"
              className="px-3 py-2 focus: outline-none rounded w-full "
            />
            <ErrorMessage name="birthdate" component="p" />
            <label
              htmlFor="age"
              className="font-bold  block text-[#ffffff]"
            >
              {' '}
              Edad
            </label>
            <Field
              label="age"
              type="number"
              name="age"
              placeholder="Ingresa tu edad"
              className="px-3 py-2 focus: outline-none rounded w-full "
            />
            <ErrorMessage name="age" component="p" />
            <label/>
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
