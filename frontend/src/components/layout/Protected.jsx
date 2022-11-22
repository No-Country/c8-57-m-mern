import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

function Protected() {
  const [auth, setAuth] = useState(false);
  const {
    loading,
    setLoading,
  } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const storageUser = localStorage.getItem('user');
    if (storageUser === null) {
      setAuth(false);
      setLoading(false);
      Swal.fire({
        title: 'Unauthorized',
        text: 'Login is required',
        icon: 'error',
        position: 'center',
      });
      navigate('/login');
    } else {
      setAuth(true);
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading && 'loading....'}
      {auth && <Outlet />}
    </>

  );
}

export default Protected;