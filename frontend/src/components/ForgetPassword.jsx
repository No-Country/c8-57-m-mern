/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

function ForgetPassword() {
  const Recuperar = (actions) => {
    Swal.fire({
      title: 'Token enviado!',
      text: 'Revisa tu correo para recuperar tu contraseña',
      icon: 'success',
      position: 'top',
    });
    actions.setSubmitting(false);
  };
  const recoverPassword = Yup.object().shape({
    email: Yup.string().email('Mail no valido').required('Required'),
    name: Yup.string()
      .min(3, 'Nombre muy corto!')
      .max(15, 'Nombre demasiado largo!')
      .matches(/^[A-Z _]+$/i, 'El nombre solo puede contener letras'),
  });
  return (
    <div className="bg-secondary p-8 shadow-md shadow-secondary rounded-xl w-full md:m-auto md:w-1/3">
      <header className="flex items-center  justify-center pt-2 pb-4">
        <h2 className="text-2xl font-bold text-[#ffffff]">Recuperar Contraseña</h2>
      </header>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={recoverPassword}
        onSubmit={Recuperar}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="name" className="font-bold  block text-[#ffffff]">
              {' '}
              Nombre
            </label>
            <Field
              name="name"
              id="name"
              type="text"
              placeholder="Ingresa tu nombre"
              className="px-3 py-2 focus: outline-none rounded w-full "
            />
            <ErrorMessage name="name" component="p" />
            <label htmlFor="email" className=" font-bold block text-[#ffffff] mt-5 ">
              {' '}
              Email
            </label>
            <Field
              name="email"
              type="email"
              className="px-3 py-2 focus: outline-none rounded w-full "
              placeholder="Ingresa tu email"
            />
            <ErrorMessage name="email" component="p" />
            <button
              type="submit"
              disabled={isSubmitting}
              className=" w-full text-lg py-2  mb-4 bg-third rounded-lg text-gray-800 font-bold active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#b1656c]  disabled:cursor-not-allowed text-[#ffffff] mt-4"
            >
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ForgetPassword;
