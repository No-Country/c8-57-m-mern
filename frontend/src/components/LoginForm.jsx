/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function LoginForm() {
  const login = () => true;
  const [user, setUser] = useState(false);
  const loguear = async (actions, values) => {
    setUser(await login(values));
    actions.setSubmitting(false);
  };
  const loginSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Contraseña muy corta!')
      .max(50, 'Demasiado larga!')
      .required('Required'),
    email: Yup.string().email('Mail no valido').required('Required'),
  });
  return (
    <div className="bg-secondary p-8 shadow-md shadow-secondary rounded-xl w-full md:m-auto md:w-1/3">
      <header className="flex items-center  justify-center pt-2 pb-4">
        <h2 className="text-2xl font-bold text-[#ffffff]">Login</h2>
      </header>
      {user && <Navigate to="/home" replace />}
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={loguear}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="email" className=" font-bold block text-[#ffffff] mt-5 ">
                {' '}
                Email
              </label>
              <Field
                name="email"
                id="email"
                type="email"
                className="px-3 py-2 focus: outline-none rounded w-full "
                placeholder="Ingresa tu email"
              />

              <ErrorMessage name="email" component="p" />
              <label className=" font-bold block text-[#ffffff]  mt-5"> Contraseña</label>
              <Field
                name="password"
                type="password"
                className="px-3 py-2 focus: outline-none rounded w-full "
                placeholder="Ingresa una contraseña"
              />
              <ErrorMessage name="password" component="p" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className=" w-full text-lg py-2  mb-4 bg-third rounded-lg text-gray-800 font-bold active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#b1656c]  disabled:cursor-not-allowed text-[#ffffff] mt-4"
            >
              Continuar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
