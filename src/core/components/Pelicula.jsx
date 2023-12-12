import React from 'react'
import './Pelicula.css'
import { useElContexto } from '../context/Contexto'
import { useAuth } from '../auth/hooks/useAuth';

const Pelicula = ({imagenurl,titulo,id,fecha,voto,elegida}) => {


const{AgregarFavorito,ElminarFavorito,usuario,SetDisplay,display}=useElContexto();
const{user}=useAuth();



    
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
             onClick={ ()=>SetDisplay(id)
              
            
            }
           >Más</button>
            
           <span> </span> 
           
           <button 
           
           onClick={
            !elegida?  
            ()=>         
            {AgregarFavorito(imagenurl,titulo,id,fecha,voto,user);}:
            ()=>
             {ElminarFavorito(id,user);}
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