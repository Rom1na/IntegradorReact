import { useRef, useEffect } from 'react';
import Pelicula from '../Pelicula';




export const AppSwiper = ({peliculas,encabezado}) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    swiperElRef.current.addEventListener('swiperProgress', (e) => {
      // Lógica cuando cambia el progreso del swiper
    });

    swiperElRef.current.addEventListener('swiperSlideChange', (e) => {
      // Lógica cuando cambia el slide del swiper
    });

  }, []);





  return (

    <>

    

    <h2>{encabezado}</h2>  

    <swiper-container
      ref={swiperElRef}
      slides-per-view="1" 
      navigation="false" 
      pagination="false"
      
      
    >

<swiper-slide>
        <div 
        style={{
        display:"flex",
        gap: "15px"
        
       }}>

            
        {peliculas?.slice(0,5).map((pelicula) =>
        <Pelicula
            key = {pelicula.id}
            id={pelicula.id}
            imagenurl={pelicula.poster}
            titulo={pelicula.titulo}
            fecha ={pelicula.fecha}
            elegida={pelicula.elegida}  
        
        />    
        ) 
        }

   </div>
        </swiper-slide>
        <swiper-slide>
        <div 
       style={{
        display:"flex",
        
       }}>

            
        {peliculas?.slice(5,10).map((pelicula) =>
        <Pelicula
            key = {pelicula.id}
            id={pelicula.id}
            imagenurl={pelicula.poster}
            titulo={pelicula.titulo}
            fecha ={pelicula.fecha}
            elegida={pelicula.elegida}  
        
        />    
        ) 
        }

   </div>
        </swiper-slide>
        <swiper-slide>
        <div 
       style={{
        display:"flex",
        
        }}>

            
        {peliculas?.slice(10,15).map((pelicula) =>
        <Pelicula
            key = {pelicula.id}
            id={pelicula.id}
            imagenurl={pelicula.poster}
            titulo={pelicula.titulo}
            fecha ={pelicula.fecha}
            elegida={pelicula.elegida}  
        
        />    
        ) 
        }

   </div>       
        
        </swiper-slide>




        <swiper-slide>
        <div 
       style={{
        display:"flex",
        
        }}>

            
        {peliculas?.slice(15,20).map((pelicula) =>
        <Pelicula
            key = {pelicula.id}
            id={pelicula.id}
            imagenurl={pelicula.poster}
            titulo={pelicula.titulo}
            fecha ={pelicula.fecha}
            elegida={pelicula.elegida}  
        
        />    
        ) 
        }

        </div>       
        
        </swiper-slide>    
         
      
       
     



    </swiper-container>    

    </>    
  );
};