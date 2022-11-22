/* eslint-disable arrow-body-style */
import { useContext } from 'react';
import AuthContext from '../context/AauthProvider';

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
