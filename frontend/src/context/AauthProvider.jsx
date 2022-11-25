import { createContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [user, setUser] = useState({ email: '', name: '', id: 0 });
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem('user'));
    // console.log(userStorage);
    if (userStorage) {
      setUser({
        email: userStorage.email,
        name: userStorage.name,
        id: userStorage._id,
      });
    }
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
