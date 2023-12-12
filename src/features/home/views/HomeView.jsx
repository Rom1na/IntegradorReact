import React from 'react'
import { useState,useEffect } from 'react';
import Pelicula from '../../../core/components/Pelicula';
import { fechDataAx } from '../../../core/services/fechDataAx';
import { endPointPeliculas,endPointSeries } from '../../../core/services/url';
import { crearPeliculas } from '../../../core/filters/filters';
import Navbar from '../../../core/components/Navbar';
import Contenedor from '../../../core/components/Contenedor';
import { useElContexto } from '../../../core/context/Contexto';
import { useAuth } from '../../../core/auth/hooks/useAuth';



const HomeView = () => {

    const {user}=useAuth();
    const {setPeliculas,peliculas,favoritos,dat,SetFavoritos,loadDataFromLocalStorage,usuario,setUsuario,getUser,registrarUsuario}=useElContexto();
    
 

   useEffect(() => {
  
   fechDataAx(endPointPeliculas.estrenos,crearPeliculas,setPeliculas);
    //  console.log('pelis',peliculas);
  

   /* 
    const itemRecuperado = getUser('usuario');
    setUsuario(itemRecuperado);
    console.log ('!!',usuario);
    loadDataFromLocalStorage(usuario);
  */
 //  registrarUsuario();
   loadDataFromLocalStorage(user);
 
  //SetFavoritos(dat);
  setPeliculas(peliculas);  
      
    }, []);
  

 



  return (

    <>
   
    
    <Navbar/>
    <Contenedor/>

  

    

    

   


    </>
  )
}

export default HomeView