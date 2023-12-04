import React from 'react'
import { useEffect,useState } from 'react';
import { fechDataAx } from '../services/fechDataAx';
import { ContextoProveedor, useElContexto } from '../context/Contexto';
import { endPointPeliculas,endPointSeries } from '../services/url';
import { AppSwiper} from './Swiper/AppSwiper';
import SwiperSlide from './Swiper/SwiperSlide';
import Pelicula from './Pelicula';
import Banner from './Banner';

const Contenedor = () => {
   

    const {favoritos,SetFavoritos,
           dat,setDat,loadDataFromLocalStorage,usuario,setUsuario,getUser,setPeliculas,peliculas} = useElContexto();      
  


    useEffect(()=>{
     
   // fechDataAx(endPointPeliculas.topRated,crearPeliculas,setPeliculas);
    //  const itemRecuperado = getUser('usuario');
    //  setUsuario(itemRecuperado);
    
    
     
    // Trae  El Json correspondiente a cada Usuario.Todavia esta en proceso de construccion x bug: El estate, esta 3 pasos atrasado en la renderización
    
    loadDataFromLocalStorage(usuario);
    
    //setPeliculas(peliculas);


   
   
  
    SetFavoritos(dat);
    
   // console.log('Cont',peliculas);
   // console.log('u',usuario);

    
  

      
    

      },[]);


      
     


  return (
    <>


      <AppSwiper encabezado={'ESTRENOS'} peliculas={peliculas} />
          <Banner peliculas={peliculas} />

          {favoritos.length > 0 ? (
            <AppSwiper encabezado={'Tus peliculas favoritas.'} peliculas={favoritos} />
          ) : (
            <p>No tenés películas Favoritas seleccionadas, Hace click en el botón de corazón para agregarlas.</p>
          )}

          <h4></h4>
     
     
       
   
    
      </>  
  )
}

export default Contenedor



/* 

     
      <AppSwiper
       encabezado={'ESTRENOS'}
       peliculas = {peliculas}   >
       </AppSwiper>


       <Banner
         peliculas={peliculas}/>
      

        
          


             


           

        <AppSwiper
       encabezado={'Tus peliculas favoritas.'}
       peliculas = {favoritos}  
       >
       </AppSwiper>
       
      
      
        
       
      
      
        
    
        <h4> </h4>
     


*/