import React, { useEffect, useState } from "react";
import UltimoProyecto from './UltimoProyecto'
import ListaProyectos from "./ListaProyectos";
import '../assets/css/Proyectos.css'

function Proyectos() {

  const [Proy, setProy] = useState([]);

  useEffect(function(){
    console.log('%cse monto el componente', 'color:yellow');
    fetch('http://localhost:3010/api/proyects')
            .then(res => res.json())
            .then(function(data){
              return  setProy(data.proyects)
            })
            .catch(e => console.log(e))
    }, [])
    
    console.log(Proy);

    return (
      <div className="Proyecto-gral">
        <h1>Proyectos</h1>
        <div className='Main-proyectos'>
          <div className="Enlace-Listas">
            <h3>Lista de proyectos</h3>
              {Proy.map(function(proyecto,i){
                  return <ListaProyectos {...proyecto} key={i} />
              })}
          </div>
          <div className="Enlace-Listas">
            <h3>Ultimo proyecto</h3>
              {Proy.map(function(proyecto,i){
                if (proyecto.proyect_name =='CarpinchoDrinks') {
                  return <UltimoProyecto {...proyecto} key={i} />
                }
              })}
          </div>
        </div>
      </div>
    );
  }



  

export default Proyectos