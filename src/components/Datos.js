import React from 'react';
import '../assets/css/Main.css'
import fotoDatos from '../assets/image/1670274907197_img.jpg'
import '../assets/css/Datos.css'
import Documento from '../CV_Agustin_Xavier_Alvarez.pdf'


function Main_proy(){
    return (
        <div className='Presentacion-datos'>
            <h1>Datos</h1>
            <div className='Main-datos'>
                <div className='Imagen-datos'>
                    <img src={fotoDatos} /> 
                </div>
                <div className='Carta-datos'>
                    <div >
                        <p>Me llamo Agustin Xavier Alvarez, Tengo 22 años y actualmente estoy cursando en mi ciudad el segundo año en la carrera de
                            Ingenieria en Sistemas de la Informacion, en la Universidad Tecnologica Nacional.
                            Actualmente me encuentro en la busqueda de un trabajo en el cual pueda desarrollar todas mis habilidades como programador
                            y poder profundisar todos mis conocimientos.
                            </p>
                    </div>
                    <div className='Skills-datos'>
                        <h1>Skills</h1>
                        <div className='List-skills'>
                            <ul type='none'>
                                <li>JavaScript</li>
                                <li>HTML5</li>
                                <li>Css3</li>
                                <li>React.js</li>
                                <li>Json</li>
                                <li>C++</li>
                            </ul>
                            <ul type='none'>
                                <li>MySQL</li>
                                <li>APIs</li>
                                <li>Git</li>
                                <li>Metodologías ágiles</li>
                                <li>JQuery</li>
                                <li>MVC</li>
                            </ul>
                        </div>
                        <div className='Button-datos-cv'>
                            <a href={Documento} target='_blank' download={'Cv_AgustinXavierAlvarez.pdf'} >
                                <button >
                                    Descargar Cv
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
    
        

export default Main_proy;