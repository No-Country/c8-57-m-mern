/* eslint-disable no-console */
import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'Yup';
import useAuth from '../hooks/useAuth';

function Perfil() {
  const handleSubmit = 
  };
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
    nickname: Yup.string().min(3, 'Nickname muy corto!').max(15, 'Nickname demasiado largo!'),
  });
  console.log(useAuth.user);
  return (
    <div>
      <Formik
        initialValues={{
          name: useAuth.user,
          lastname: '',
          nickname: '',
        }}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
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
            placeholder={useAuth.name}
            className="px-3 py-2 focus: outline-none rounded w-full "
          />
          <ErrorMessage name="name" component="p" />
          <label htmlFor="lastname" className="font-bold  block text-[#ffffff]">
            {' '}
            Apellido
          </label>
          <Field
            name="lastname"
            id="lastname"
            type="text"
            placeholder="Ingresa tu apellido"
            className="px-3 py-2 focus: outline-none rounded w-full "
          />
          <ErrorMessage name="lastname" component="p" />
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
        </Form>
      </Formik>
    </div>
  );
}

export default Perfil;
