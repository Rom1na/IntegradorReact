import React, { useState,useEffect } from 'react'
import './LoginView.css'
import { useAuth } from '../../../core/auth/hooks/useAuth';
import { ElContexto, useElContexto } from '../../../core/context/Contexto';


const LoginView = () => {
     
    const {login} =useAuth();
    const {setTitulo}= useElContexto();
    
    const [form,setForm] = useState({
      user:"",
      pass:"",  /*El login tambien maneja la contraseña para ser utilizada cuando el proyecto avance en el manejo de credencial, pero hoy queda sólo en el hook */

    });

    const handleChange = (e)=>{
      const name =  e.target.name;
      const value = e.target.value;
  
     setForm({
      ...form,
      [name]: value,
     }); 
     setTitulo('Estrenos');
     

    }; 

   
    
    




  return (
    <>
     

    <form className="form">
    <div className="header">Bienvenido</div>
    <div className="inputs">
        <input
         name="user"
         value={form.user}
         onChange={handleChange}
         placeholder="Nombre de usuario" 
         className="input" 
         type="text"/>
        <input 
        name="pass"
        value={form.pass}
        onChange={handleChange}
        placeholder="Contraseña" 
        className="input"
         type="password"/>
    
    <button className="sigin-btn" type='button'
     onClick={()=>login(form.user)}>Enviar</button> 
    <a className="forget" href="#">Olvido su Contraseña?</a>
    <p className="signup-link">No tiene una cuenta? <a href="#">Inscribase Aqui</a></p>
    </div>
    </form>

   
   </>

  );
};

export default LoginView