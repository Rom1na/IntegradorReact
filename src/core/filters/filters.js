export const crearPeliculas = (data)=>{
    const peliculas =  data.results.map((pelicula)=>({

      poster : pelicula.poster_path
      ? `https://image.tmdb.org/t/p/w154/${pelicula.poster_path}`
      : '/noDisponible.png',
      backdrop : pelicula.backdrop_path
      ? `https://image.tmdb.org/t/p/w1280/${pelicula.backdrop_path}`
      : '/noDisponibleBack.png',
      id: pelicula.id,
      titulo: pelicula.title,
      fecha: pelicula.release_date.split('-').reverse().join('-'),
      voto: pelicula.vote_average.toFixed(2),
      overview: pelicula.overview,
      elegida: false,
      tagline: pelicula.tagline,
      runtime: pelicula.runtime
      
  }));
    
  
   return peliculas;
 
}



export const crearPelicula = (data)=>{
  const pelicula = {

    poster : data.poster_path
    ? `https://image.tmdb.org/t/p/w154/${data.poster_path}`
    : '/noDisponible.png',
    backdrop : data.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`
    : '/noDisponibleBack.png',
    id: data.id,
    titulo: data.title,
    fecha: data.release_date.split('-').reverse().join('-'),
    voto: data.vote_average.toFixed(2),
    overview: data.overview,
    elegida: false,
    tagline: data.tagline,
    runtime: data.runtime
    
};
  

 return pelicula;

}




export const crearActores =(data)=>{
   const actores= data.map((actor)=>({
    id: actor.id,
    nombre: actor.name,
    personaje: actor.character,
    imagen : actor.profile_path
      ? `https://image.tmdb.org/t/p/w154/${actor.profile_path}`
      : '/noDisponible.png',

   }));

  return actores

}



export const crearTrailers =(data)=>{
  const trailer= {
   
  k: data.results[0].key,
  link: `https://www.youtube.com/embed/${data.results[0].key}`,
  size: data.results[0].size 
  };

 

 return trailer

}