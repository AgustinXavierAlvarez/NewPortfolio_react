import React from 'react';
import '../assets/css/Redes.css';
import Mensaje from './Mensaje'


function Redes(){
    return(

        <div className="Main-redes">
            <div >
                <h1>Redes</h1>
           </div>
            <div className='Section-mensaje'>
                <Mensaje/>
            </div>
            <div className="Section-redes">   
                <div  className="Box">
                    <div id="Redes">
                        <a href="https://www.linkedin.com/in/agustinxavieralvarez/" id="profile-link" className="Red text" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/AgustinXavierAlvarez" className="Red text" target="_blank"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.instagram.com/agustin.alvarez_11/" className="Red text" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>    
            </div>
        </div>
        
    )
}


export default Redes;