import React, { useState,useEffect } from 'react'
import './DetallePelicula.css'
import Cast from './Cast'
import { crearActores, crearPeliculas,crearPelicula,crearTrailers } from '../filters/filters';
import { endPointPeliculas } from '../services/url';
import { fechDataAx,fechDataAxId,fechDataAxDatos, fechDataAxCast } from '../services/fechDataAx';
import Pelicula from './Pelicula';
import { useElContexto } from '../context/Contexto';


const DetallePelicula = ({id}) => {

  const [cast,setCast]= useState([]);
  const [pelicula,setPelicula]=useState([]);
  const [trailer,setTrailer] = useState([]);
  const {display,SetDisplay}= useElContexto();
  
  useEffect(() => {

    setTrailer('')
    fechDataAxCast (endPointPeliculas.datos,crearActores,setCast,id);
    fechDataAxId(endPointPeliculas.datos,crearPelicula,setPelicula,id);
    fechDataAxDatos(endPointPeliculas.datos,crearTrailers,setTrailer,id,'videos')
    
    

    console.log('hm',trailer);
    console.log('h',pelicula)
    
    

   

  }, [display]);








  return (
  <>
    <div className='container'>
        <div className='uno'>
        <div> <p className='titulo'>{pelicula.titulo}</p></div>
          <div><p className='tagline'>{pelicula.tagline}</p></div>
          <div><p className='overview'>{pelicula.overview}</p></div> 
          
          <div
          onClick={()=>SetDisplay('')}
          style={{display:'flex',
                  gap:'150px'  }}>
          <div><p className='overview'>Puntaje: {pelicula.voto}</p></div> 
          <div><p className='overview'>Estreno:  {pelicula.fecha}</p></div>
          <div><p className='overview'>Duración: {pelicula.runtime} minutos</p></div> 
          <button
             style={{backgroundColor:"transparent",
             Shadow:" -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
             fontSize: "14px"
                    
            }}
        
        
        >Volver ▶</button>    
          </div>
          
       
        </div>  
        <div className='dos'>
         
         <iframe
                    
            src={trailer.link}
            title='Trailer'
            width='550px'
            height='90%'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen'>
            
          </iframe>

        </div>
        <div className='tres'>
        
        {cast?.map((actor)=>
        <Cast
        key={actor.id}
        imagen={actor.imagen}
        nombre={actor.nombre}
        personaje={actor.personaje}
       
       />

        
        )}
        
        

        </div>


        
        <div className='cuatro'>
              
        
        </div>

    </div>
  
  

    

  </>





  )
}

export default DetallePelicula