import { cBase } from "./cBase";
import { useElContexto } from "../context/Contexto";



export const fechDataAx = async(ep,filter,setData) =>{
     const {data} = await cBase.get(ep);
    // console.log ('llamada',data);
     const resultados = filter(data);
     //console.log( 're',resultados);
     setData(resultados);

};

export const fechDataAxId = async(ep,filter,setData,id) =>{
     const urlcompuesta = ep+id;
     const {data} = await cBase.get(urlcompuesta);
   //  console.log ('llamada',data);
     const resultados = filter(data);
   //  console.log( 're',resultados);
     setData (resultados);

};


export const fechDataAxDatos = async(ep,filter,setData,id,dato) =>{
     const urlcompuesta = ep+id+'/'+dato;
     const {data} = await cBase.get(urlcompuesta);
     console.log ('llamada',data);
     const resultados = filter(data);
     console.log( 're',resultados);
     setData (resultados);

};


export const fechDataAxCast = async(ep,filter,setData,id) =>{
     const urlcompuesta = ep+id+'/credits';
     const {data} = await cBase.get(urlcompuesta);
     const resultados = filter(data.cast);
     setData (resultados);

};