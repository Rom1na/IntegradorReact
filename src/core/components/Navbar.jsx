import React, { useEffect, useState } from 'react'
import { useAuth } from '../auth/hooks/useAuth';
import { useElContexto } from '../context/Contexto';
import { fechDataAx,fechDataAxId } from '../services/fechDataAx';
import { crearPeliculas } from '../filters/filters';
import { endPointPeliculas } from '../services/url';



const Navbar = () => {
    
    const {islogged,logout,user}= useAuth();
    const {setError,setIsLoading,peliculasbusq,getUser,usuario,setUsuario,setPeliculas,peliculas,setTitulo}=useElContexto();
    const [busq,setBusq] = useState (null);
  


    const handleChang = (e) =>{
      const busqueda = e.target.value;

     setBusq(busqueda);
     console.log(busq)
    

    };

    const handleSearch = (busq) =>{
      
      fechDataAxId(endPointPeliculas.peliculaId,crearPeliculas,setPeliculas,busq);
      console.log('nav',busq); 
      setTitulo(`Resultado de la búsqueda de ${busq}`);

    };
 
  


   useEffect(() =>{
     // const itemRecuperado = getUser('usuario');
     // setUsuario(itemRecuperado);
     console.log('?!?',user)
     

   },[]);
   
   



  return (
    
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'100%',
        margin:'auto'
         }}>
      <div>
         <h2 style={{
           color: '#e50914',
           fontFamily:'Bebas Neue, sans-serif',
           fontSize: '35px',

         }}
         >ReactFilms</h2>
      </div>
    <div>
    <div
    style={{
      display :'flex',
      gap :"10px"}}>
      <input
         style={{
          fontSize:'14px',
          fontFamily:'Tahoma',
          
         }} 
         name ='busqueda'
         type ='text'
         placeholder='su búsqueda 🔍'
         onChange={handleChang}
      /> 
       <button
          
       
       onClick={()=>{handleSearch(busq);}}>Buscar</button>            
      </div>  

    </div>
    
      <div> 
      <p
      style={{
        fontSize:'14px',
        border: '1px solid white',
        padding: '0.3em 1.2em',
        borderRadius:'1px',
        borderColor:'#fff',  
      }}>
        {console.log('??',user)}
        Hola {user}!🖐🏻</p>
      </div> 

      <div>
      <button onClick={logout}>Salir</button>  
      </div> 
      
       
   
   </div>
  )
}

export default Navbar