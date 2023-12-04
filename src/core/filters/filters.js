export const crearPeliculas = (data)=>{
    const peliculas =  data.results.map((pelicula)=>({

      poster : pelicula.poster_path
      ? `https://image.tmdb.org/t/p/w154/${pelicula.poster_path}`
      : '/noDisponible.png',
      backdrop : pelicula.poster_path
      ? `https://image.tmdb.org/t/p/w780/${pelicula.backdrop_path}`
      : '/noDisponibleBack.png',
      id: pelicula.id,
      titulo: pelicula.title,
      fecha: pelicula.release_date.split('-').reverse().join('-'),
      voto: pelicula.vote_average.toFixed(2),
      overview: pelicula.overview,
      elegida: false,
      
  }));
    
  
   return peliculas;
 
}