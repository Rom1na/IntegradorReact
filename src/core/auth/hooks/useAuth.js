import { useContext } from 'react';
import { AuthContext } from '../context/auth_context';

export const useAuth = () => {
  const { user, isLogged, login, logout,setUser} = useContext(AuthContext);

  return {
    user,
    isLogged,
    login,
    logout,
    setUser
  };
};