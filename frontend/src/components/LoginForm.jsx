/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axiosClient from '../config/axiosClient';
import useAuth from '../hooks/useAuth';

function LoginForm() {
  const { setUser, setLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const { data } = await axiosClient.post('login', values);

      if (data.login) {
        // usuario en localStorage
        localStorage.setItem('user', JSON.stringify(data));

        // usuario en el Provider
        setUser(data);
        setLoading(false);
        navigate('/targets');
      } else {
        Swal.fire({
          title: 'Error',
          text: data.msg,
          icon: 'error',
          position: 'top',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const loginSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'Contraseña muy corta!')
      .max(50, 'Demasiado larga!')
      .required('Required'),
    email: Yup.string().email('Mail no valido').required('Required'),
  });
  return (
    <div className="bg-secondary p-8 shadow-md shadow-secondary rounded-xl w-full md:m-auto md:w-1/3">
      <header className="flex items-center  justify-center pt-2 pb-4">
        <h2 className="text-2xl font-bold text-[#ffffff]">Login</h2>
      </header>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
      >
        {({ values }) => (
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
              // disabled={isSubmitting}
              className=" w-full text-lg py-2  mb-4 bg-third rounded-lg text-gray-800 font-bold active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#b1656c]  disabled:cursor-not-allowed text-[#ffffff] mt-4"
            >
              Continuar
            </button>
            <span className="font-bold  text-[#ffffff]">
              <Link to="/reset">Olvidé mi contraseña</Link>
            </span>
            <span className="font-bold  text-[#ffffff]  ml-16"><Link to="/register">Registrarme</Link></span>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
