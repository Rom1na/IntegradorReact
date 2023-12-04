import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fechDataAx } from './core/services/fechDataAx'
import { endPointPeliculas } from './core/services/url'
//import { useElContexto } from './core/context/Contexto'
import { crearPeliculas } from './core/filters/filters'
import Pelicula from './core/components/Pelicula'
import { ContextoProveedor, ElContexto } from './core/context/Contexto'
import AuthProvider from './core/auth/provider/AuthProvider'
import RootProvider from './core/providers/RootProvider'
import {RouterProvider} from 'react-router-dom'
import {appRouter} from './core/routes/appRouter'
import { register} from 'swiper/element';






function App() {

register();
  
 
  return (


    <>
     
  
      <AuthProvider>
      <ContextoProveedor>

      
      <RootProvider>
      <RouterProvider router={appRouter} />
      </RootProvider>
      </ContextoProveedor>
     

     
     </AuthProvider> 
   
      
    </>
  );
};

export default App
