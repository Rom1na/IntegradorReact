import { createContext,useContext,useState } from "react";
export const ElContexto= createContext();

export const ContextoProveedor =({children})=>{
  const [error,setError] = useState(null);
  const [isLoading,setIsLoading] = useState(false);    
  const [peliculas, setPeliculas]= useState([]);
  const [series,setSeries]= useState([]); 
  const [favoritos,SetFavoritos]= useState([]);
  const [dat, setDat] = useState([]);
  const [usuario,setUsuario] = useState(null);
  

 
    
    const crearPeliculas = (data)=>{
        const peliculas =  data.results.map((pelicula)=>({
          
          poster:`https://image.tmdb.org/t/p/w154/${pelicula.poster_path}`,       
          id: pelicula.id,
          titulo: pelicula.title,
          backdrop: `https://image.tmdb.org/t/p/w780/${pelicula.backdrop_path}`,
          fecha: pelicula.release_date.split('-').reverse().join('-'),
          voto: pelicula.vote_average.toFixed(2),
          overview: pelicula.overview,
          elegida: false,
          
      }));
        
      //console.log(peliculas);
      setPeliculas(peliculas);
       //return peliculas;
     
    }

    const crearSeries = (data)=>{
      const series =  data.results.map((serie)=>({
        id: serie.id,
        titulo: serie.name,
        poster: `https://image.tmdb.org/t/p/w154/${serie.poster_path}`,
        backdrop: `https://image.tmdb.org/t/p/w780/${serie.backdrop_path}`,
        fecha: serie.first_air_date.split('-').reverse().join('-'),
        voto: serie.vote_average.toFixed(2),
        overview: serie.overview,
        elegida: false,
        
    }));
      
    //console.log(peliculas);
    setPeliculas(series);
   
  }

  const PeliculaFavorita = (imagen,titulo,id,fecha,voto) =>({
    id: id,
    titulo: titulo,
    poster: imagen,
    fecha: fecha,
    voto: voto,
    elegida: true,
    

    
});

const AgregarFavorito = (imagen, titulo, id, fecha, voto,user) => {
  // Crea un nuevo favorito
  const nuevoFavorito = PeliculaFavorita(imagen, titulo, id, fecha, voto);
 

  // Actualiza el estado y utiliza una función de devolución de llamada para asegurarte de tener el estado actualizado
  SetFavoritos((favoritosActuales) => {
    const nuevosFavoritos = [...favoritosActuales, nuevoFavorito];
    
    
    // Guarda los favoritos en el localStorage
    saveDataToLocalStorage(nuevosFavoritos,user);

    // Devuelve la nueva versión del estado
    return nuevosFavoritos;
  });
};



const ElminarFavorito = (id,user) => {
  // Crea un nuevo favorito
  const nuevosFavoritos = favoritos.filter(f=>f.id!==id);
 

  // Actualiza el estado y utiliza una función de devolución de llamada para asegurarte de tener el estado actualizado
  SetFavoritos (nuevosFavoritos)
    
    
    
    // Guarda los favoritos en el localStorage
    saveDataToLocalStorage(nuevosFavoritos,user);

    // Devuelve la nueva versión del estado
    return nuevosFavoritos;
  };









 const saveDataToLocalStorage = (data,user) => {
    try {
      // Convierte el objeto a una cadena JSON
      const dataJson = JSON.stringify(data);

      // Guarda la cadena JSON en el localStorage
      localStorage.setItem(user, dataJson);

      console.log('Datos guardados en el localStorage:', dataJson);
    } catch (error) {
      console.error('Error al guardar datos en el localStorage:', error);
    }
};



const loadDataFromLocalStorage = (key) => {
  try {
    // Obtiene la cadena JSON del localStorage
    const storedData = localStorage.getItem(key);

    // Si existe la cadena JSON, la parsea a un objeto
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      console.log('Datos recuperados del localStorage:', parsedData);

      // Actualiza el estado con los datos recuperados
      setDat(parsedData);
    } else {
      console.log('No hay datos en el localStorage.');
      
    }
  } catch (error) {
    console.error('Error al recuperar datos del localStorage:', error);
  }
}; 


const getUser = (key)=>{
  try {
    // Intenta obtener el item del localStorage
    const item = localStorage.getItem(key);

    // Si el item existe, parsea el contenido y devuélvelo
    if (item) {
      return (item) ;
    }

    // Si el item no existe, devuelve null
    return null;
  } catch (error) {
    console.error('Error al obtener el item del localStorage:', error);
    return null;
  }
      
};












      

    return (
      <ElContexto.Provider
        value={{
           peliculas,
           series,
           favoritos,
           dat,
           usuario,
           crearSeries,
           crearPeliculas,
           setError,
           setIsLoading,
           setPeliculas,
           setSeries, 
           SetFavoritos,
           AgregarFavorito,
           loadDataFromLocalStorage,
           ElminarFavorito,
           setDat,
           getUser,
           setUsuario
           
        }}
      >
        {children}
      </ElContexto.Provider>       
    );


    
};


export const useElContexto =() =>{
     const{peliculas,crearPeliculas,setError,setIsLoading,setPeliculas,series,setSeries,crearSeries,busq,setBusq,favoritos,SetFavoritos,AgregarFavorito,ElminarFavorito,loadDataFromLocalStorage,dat,setDat,getUser,usuario,setUsuario} = useContext(ElContexto);

   return{
     peliculas,
     series,
     favoritos,
     dat,
     crearPeliculas,
     crearSeries,
     setError,
     setIsLoading,
     setPeliculas,
     setSeries,
     SetFavoritos,
     AgregarFavorito,
     ElminarFavorito,
     loadDataFromLocalStorage,
     setDat,
     getUser,
     setUsuario,
     usuario
    }

   };  




