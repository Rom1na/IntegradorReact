import React from 'react'
import { useState,useEffect } from 'react';
import { useElContexto } from '../context/Contexto';

const Banner = ({peliculas}) => {

    const [numeroAleatorio, setNumeroAleatorio] = useState(null);
    const {SetDisplay,display}=useElContexto();

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
        height:"600px",
        width:"100%",
        backgroundImage: `url(${pelicula.backdrop})`, 
        backgroundPosition:"center top",
        backgroundSize:"100% auto",
       
        
      }}

    >
        <div
        style={{
            display:"flex",
            flexDirection:"column",
            alignSelf: "flex-end"
            
                   

        }}>
        <h2
            style={{
                color: "white",
                textShadow:" -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
                 
                
            }}
            >{pelicula.titulo}</h2>   
            <p
            style={{
                color: "white",
                fontSize:"14px",
                textShadow:" -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
                padding:'25px',
            }}

            
            >{pelicula.overview}</p>   
            

        </div>
        
        <div
           style={{
                display :"flex",
                gap :"10px",
                justifyContent:"flex-end",
                padding :"65px"
          }}

        >

       

        <button
             style={{backgroundColor:"transparent",
             Shadow:" -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",          
            }}
        onClick={ ()=>SetDisplay(pelicula.id)}
        
        >Más información ▶</button>    
    
      </div>

    </div>
    </div>
   </>

  )
}

export default Banner


