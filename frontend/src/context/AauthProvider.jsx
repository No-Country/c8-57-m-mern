import { createContext, useMemo, useState } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const data = useMemo(() => ({
    user,
    setUser,
    loading,
    setLoading,
    email,
    setEmail,
  }), []);
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export { AuthProvider };

export default AuthContext;
