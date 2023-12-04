import React from 'react'
import { useState,useEffect } from 'react';
import Pelicula from '../../../core/components/Pelicula';
import { fechDataAx } from '../../../core/services/fechDataAx';
import { endPointPeliculas,endPointSeries } from '../../../core/services/url';
import { crearPeliculas } from '../../../core/filters/filters';
import Navbar from '../../../core/components/Navbar';
import Contenedor from '../../../core/components/Contenedor';
import { useElContexto } from '../../../core/context/Contexto';



const HomeView = () => {


    const {setPeliculas,peliculas,favoritos,dat,SetFavoritos}=useElContexto();
    
 

   useEffect(() => {
  
   fechDataAx(endPointPeliculas.estrenos,crearPeliculas,setPeliculas);
    //  console.log('pelis',peliculas);
   
    
      
    }, []);
  

 



  return (

    <>
   
    
    <Navbar/>
    <Contenedor/>

  

    

    

   


    </>
  )
}

export default HomeView