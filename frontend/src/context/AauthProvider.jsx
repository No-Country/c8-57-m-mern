import { createContext, useEffect, useMemo, useState } from 'react';
import axiosClient from '../config/axiosClient';

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
        const res = await axiosClient.get('user/' + userStorage._id);
        const { user } = res.data;
        setUser({
          email: user.email,
          name: user.name,
          id: user._id,
        });
      }
    })();
  }, []);
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
        setLoading,
        email,
        setEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };

export default AuthContext;
