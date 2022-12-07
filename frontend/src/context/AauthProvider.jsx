import { createContext, useEffect, useMemo, useState } from 'react';
import axiosClient from '../config/axiosClient';
import { createCheckoutRequest } from '../helpers/stripe';
import { updateFirstLogin } from '../helpers/firstLogin';
import { getUserByEmail } from '../helpers/user';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    (async () => {
      const userStorage = JSON.parse(localStorage.getItem('user'));
      if (userStorage.login) {
        console.log(userStorage._id);
        const res = await axiosClient.get('user/' + userStorage._id);
        const { user } = res.data;
        // console.log(user);
        setUser({
          email: user.email,
          name: user.name,
          id: user._id,
          firstLogin: user.firstLogin,
        });
      }
    })();
  }, []);

  const putFirstLoginUser = async (id, firstLogin) => {
    try {
      const body = { firstLogin, id };
      const { data } = await updateFirstLogin(body);
      console.log('FIRST LOGIN:', data);
      return data;
    } catch (error) {
      console.log('Error:', error);
    }
  };
  const postCheckout = async (order) => {
    // console.log('estoy en postCheckout');
    const { data } = await createCheckoutRequest(order);
    return data;
  };

  const getUserEmail = async (email) => {
    const { data } = await getUserByEmail(email);
    return data;
  };
  // const data = useMemo(
  //   () => ({
  //     user,
  //     loading,
  //     setLoading,
  //     email,
  //     setEmail,
  //   }),
  //   []
  // );
  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        email,
        setLoading,
        setEmail,
        putFirstLoginUser,
        postCheckout,
        getUserEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };

export default AuthContext;
