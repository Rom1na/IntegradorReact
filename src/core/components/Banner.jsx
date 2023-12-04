import React from 'react'
import { useState,useEffect } from 'react';

const Banner = ({peliculas}) => {

    const [numeroAleatorio, setNumeroAleatorio] = useState(null);

    useEffect(() => {
        // Generar un número aleatorio entre 0 y 19
        const nuevoNumero = Math.floor(Math.random() * 20);
        setNumeroAleatorio(nuevoNumero);
       
        



      }, []);
    
      // Verificar si los datos están disponibles y si el número aleatorio es válido
      const pelicula = peliculas && peliculas[numeroAleatorio] ? peliculas[numeroAleatorio] : 'Dato no disponible';




  return (
    <>

    
    
    <div  /*canvas */
     style={{
        display:"flex",
        justifyContent: "center",
        
        
     }}>

    <div
      style={{
        height:"439px",
        width:"780px",
        backgroundImage: `url(${pelicula.backdrop})`, 
        border: "1px solid white",
        
      }}

    >
        <div
        style={{
            display:"flex",
            flexDirection:"column",
            justifyContent: "center",
            
            
            
            

        }}>
        <h3
            style={{
                color: "white",
                textShadow:" -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
                
            }}
            >{pelicula.titulo}</h3>   
            <p
            style={{
                color: "white",
                textShadow:" -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
                
            }}

            
            >{pelicula.overview}</p>   
            

        </div>
        <button
            style={{backgroundColor:"transparent"}}
           
                    /*Desarrollo: Crear un componente detalle de pelicula que incluya creditos y trailers / teasers
                    (1) Como children de HomeView
                    o
                    (2) Por props

                    Referencia: ve comentarios en ---> appRouter.jsx
                    */
            
            
            >
                Más Información
            </button>
    


    </div>
    </div>
   </>

  )
}

export default Banner


