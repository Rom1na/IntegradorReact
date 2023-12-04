import { cBase } from "./cBase";
import { useElContexto } from "../context/Contexto";



export const fechDataAx = async(ep,filter,setData) =>{
     const {data} = await cBase.get(ep);
     console.log ('llamada',data);
     const resultados = filter(data);
     console.log( 're',resultados);
     setData(resultados);

};