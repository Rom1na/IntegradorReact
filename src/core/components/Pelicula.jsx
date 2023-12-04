import React from 'react'
import './Pelicula.css'
import { useElContexto } from '../context/Contexto'

const Pelicula = ({imagenurl,titulo,id,fecha,voto,elegida}) => {


const{AgregarFavorito,ElminarFavorito,usuario}=useElContexto();



    
  return (
   <>
    <div className="card">
        <div className="card-inner">
          <div className="card-front">
           
            
            <img src={imagenurl} alt={titulo}/>
          </div>
          <div className="card-back">
           <h5>{titulo}</h5>
           <h5>{fecha}</h5>
           <h5>Puntaje: {voto}</h5>
           <div>
           <button
             onClick={ ()=>
              {alert(`En Proceso de desarrollo -> id de pelicula: ${id}`);}
              /*Desarrollo: Crear un componente detalle de pelicula que incluya creditos y trailers / teasers
              (1) Como children de HomeView
              o
              (2) Por props

              Referencia: ve comentarios en ---> appRouter.jsx
              */
            
            }
           >Más</button>
           
           
           <button 
           
           onClick={
            !elegida?  
            ()=>         
            {AgregarFavorito(imagenurl,titulo,id,fecha,voto,usuario);}:
            ()=>
             {ElminarFavorito(id,usuario);}
            //{alert(`En Proceso de desarrollo -> id de pelicula: ${id}`);}
            /*Desarrollo : Para poder hacer el filter al state creando un nuevo hook, es necesario primero revisar la función del retrieve del Json del localStorage X Usuario.
             
            Patrón codigo  filter:
            =======================================================================================================
             const eliminarPelicula = (id) => {
                const peliculasActualizadas = peliculas.filter(pelicula => pelicula.id !== id);
                SetPeliculas (peliculasActualizadas)
            }
            =======================================================================================================
            */
            }
          
            >
             {!elegida ? "❤":"❌"}
              
              
              
              </button>

           </div>
           
            
          </div>
        </div>
    </div>
   
   </>
   
    
  
  )
}

export default Pelicula