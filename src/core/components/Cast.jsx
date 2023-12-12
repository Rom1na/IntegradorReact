import React from 'react'
import './Cast.css'

const Cast = ({imagen,nombre,personaje}) => {
  return (
    <div class="card">
   <div>
        <img src={imagen} alt={'nombre'}/>
        <span class="nombre">{nombre}</span>
        <span class="personaje">{personaje}</span>
   </div>
   </div>


  )
}

export default Cast



/*
 <img src={'https://image.tmdb.org/t/p/w154/3nLlMMWeT2b4JNFVKiJm6bwGAJ.jpg'} alt={'nombre'}/>
        <span class="nombre">Sharon Stone</span>
        <span class="personaje">Ginger McKenna</span>

*/