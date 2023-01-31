import React from 'react'
import '../assets/css/Main.css';
import Presentacion from './Presentacion'
import Proyectos from './Proyectos'
import Redes from './Redes'
import Datos from './Datos'

function Main() {
    return (
    <div className='Main-presentacion'>
      <Presentacion/>
      <Datos/>
      <Proyectos/>
      <Redes/>
    </div>
    );
  }
  

export default Main