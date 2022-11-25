import { createContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [user, setUser] = useState({ email: '', name: '', id: 0 });
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

<<<<<<< HEAD
  const data = useMemo(
    () => ({
      user,
      setUser,
      loading,
      setLoading,
      email,
      setEmail,
    }),
    [],
  );
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
=======
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
>>>>>>> 5b69ad8aa50ecbc49e06ec9e084cc48f3ba1ed7a
}

export { AuthProvider };

export default AuthContext;
