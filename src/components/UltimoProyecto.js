import React from 'react';
import '../assets/css/Main.css'

const imagenes= require.context('../assets/image',true)

function UltimoProyecto(props){
    console.log(props)

    return (
            <div className='Titular_section'>
                <div className='Titular_proy'>
                    <h2>{props.proyect_name} </h2>
                    <h3>{props.proyect_date}</h3>
                </div>
                <h4>{props.proyect_function}</h4>
                <a href={props.proyect_link} target='_blank'><button className='Enlace_pagina' >Ver Proyecto</button></a>
                <div className='Section_img'>
                    <img src={imagenes(props.proyect_logo)} className='Imagen_logo'/>
                    <img src={imagenes(props.proyect_img)} className='Imagen_img'  />
                </div>
            </div>
    )
}
    
        

export default UltimoProyecto;