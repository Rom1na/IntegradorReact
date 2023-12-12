import React, { useEffect, useState } from 'react';
import { AuthContext } from '../context/auth_context';
import { ElContexto,useElContexto } from '../../context/Contexto';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  

  

  const login = async (usua) => {
    
   if (usua == ""){
   
    alert("Ingrese un usuario por favor");

   }else{ 
    setIsLogged(true);
    setUser(usua);
    localStorage.setItem('isLogged', true);
    localStorage.setItem('usuario', usua);
    //localStorage.setItem('usuario', JSON.stringify('Ro'));
   }
  };

  const logout = async () => {
    
    setIsLogged(false);
    setUser({});
    
    
    localStorage.removeItem('isLogged');
    localStorage.removeItem('usuario');
  };

  useEffect(() => {
    const isLogged = localStorage.getItem('isLogged');
    const user = localStorage.getItem('usuario');

    if (user) setUser(user);
    if (isLogged) setIsLogged(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLogged,
        login,
        logout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;