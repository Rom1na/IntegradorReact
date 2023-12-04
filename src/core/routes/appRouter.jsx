import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../auth/components/private_route/PrivateRoute";
import PublicRoute from "../auth/components/public_route/PublicRoute";
import HomeView from "../../features/home/views/HomeView";
import LoginView from "../../features/login/views/LoginView";
import Contenedor from "../components/Contenedor";



export const appRouter = createBrowserRouter([
    {
       path: '/',
       element: (
         
        <PrivateRoute>
          <HomeView/>
        </PrivateRoute>
       ),
    },
    {
       path: '/login',
       element:(
           <PublicRoute>
            <LoginView/>
           </PublicRoute>
       ), 

    },
    {
      path: '/cont',
      element:(
          <PublicRoute>
           <Contenedor/>
          </PublicRoute>
      ), 
    /*No funciona porque debe no respeta la lógica del routeo público/privado -> siempre redirecciona al root.Tiene que ser incluido a través de children del Homeview
     
   ======================================================================================================================== 
    Patrón de ruteo:

      {
       path: '/',
       element: (
        <PrivateRoute>
           <HomeView/>    
        </PrivateRoute>
       ),
        children: [
      {
        path: 'pelicula',
        element: <DetallePelicula
                  peliculalId = peliculaId />,                -----> opción con peliculaId por props
      },
       {
        element: <DetallePelicula />,
        path: ":peliculaId",
        loader: async ({ params }) => {
          return fetch(`llamada a api `);                    -----> opción +dinamica con loader.
        
      },



    ],
   ========================================================================================================================
    
    */
   },


   

]);