import React from 'react'
import '../assets/css/ListaProyectos.css'

function ListaProyectos(props) {
    console.log(props)
  return (
        <div className='Main-lista'>
            <div className='Data-lista'>
                <h5>{props.proyect_name}</h5>
                <h6>{props.proyect_date}</h6>
            </div>
            <a href={props.proyect_link} target='_blank'><button className='Enlace_pagina' >Ver Proyecto</button></a>
        </div>
  );
}

export default ListaProyectos;
