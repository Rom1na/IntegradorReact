import React, { useEffect, useState } from 'react'
import { useAuth } from '../auth/hooks/useAuth';
import { useElContexto } from '../context/Contexto';
import { fechDataAx } from '../services/fechDataAx';
import { crearPeliculas } from '../filters/filters';




const Navbar = () => {
    
    const {islogged,logout}= useAuth();
    const {setError,setIsLoading,peliculasbusq,getUser,usuario,setUsuario,setPeliculas,peliculas}=useElContexto();
    const [busq,setBusq] = useState (null);
  


    const handleChang = (e) =>{
      const busqueda = e.target.value;

     setBusq(busqueda);
     console.log(busq)
    

    };

    const handleSearch = (busq) =>{
      const endPointPeliculasBusq =`search/movie?query=${busq}`;
      fechDataAx(endPointPeliculasBusq,crearPeliculas,setPeliculas);
      
      console.log('nav',busq); 
    

    };
 
  


   useEffect(() =>{
      const itemRecuperado = getUser('usuario');
      setUsuario(itemRecuperado);

   },[]);
   
   



  return (
    
    <div
      style={{
        display: 'flex',
        justifyContent: "space-between"
        
              }}>
      <div>
      <img src='src\assets\estoesunlogo.png'></img>
      </div>
    <div>
    <div
    style={{
      display :'flex',
      gap :"10px"}}>
      <input
         style={{
          fontSize:'12px',
          fontFamily:'Verdana',
          
         }} 
         name ='busqueda'
         type ='text'
         placeholder='su búsqueda'
         onChange={handleChang}
      /> 
       <button onClick={()=>{handleSearch(busq);}}>Buscar</button>            
      </div>  

    </div>
    
      <div> 
      <p>
        Hola {usuario}!🖐🏻</p>
      </div> 

      <div>
      <button onClick={logout}>Salir</button>  
      </div> 
      
       
   
   </div>
  )
}

export default Navbar