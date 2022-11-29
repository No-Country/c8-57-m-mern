import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import Dashboard from './Dashboard';

function Protected() {
  const [auth, setAuth] = useState(false);
  const {setUser, user} = useAuth()
  const {
    loading,
    setLoading,
  } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const storageUser = JSON.parse(localStorage.getItem('user'));
    if (storageUser === null) {
      setAuth(false);
      setLoading(false);
      Swal.fire({
        title: 'Unauthorized',
        text: 'Login is required',
        icon: 'error',
        position: 'center',
      });
      navigate('/start');
    } else {
      setAuth(true);
      setUser(storageUser)
      console.log(user, 'aca de protected');
      setLoading(false);
      navigate('/home');
    }
  }, []);

  return (
    <>
      {loading && 'loading....'}
      {auth &&
      <div>
        <Dashboard />
        <Outlet />
      </div>
      }
    </>

  );
}

export default Protected;
