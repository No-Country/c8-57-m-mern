import { createContext, useEffect, useMemo, useState } from 'react';
import axiosClient from '../config/axiosClient';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const authenticateUser = async () => {
      const data = JSON.parse(localStorage.getItem('user'));
      if (!data) {
        setLoading(false);
        return;
      }
      try {
        setUser(data);   
        return
      } catch (error) {
        setUser({});
      }
      setLoading(false);
    };
    authenticateUser();
  
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
        setUser,
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
