import React from 'react'
import '../assets/css/Header.css';
import Presentacion from './Presentacion';
import NotFound from './NotFound';
import {  Switch, Link, Route } from 'react-router-dom';
import Proyectos from './Proyectos';
import Main from './Main'
import Redes from './Redes'
import Datos from './Datos'


function Header() {
  const clickMenu = e=>{
    e.preventDefault();
    let link = document.getElementsByClassName('Nav-item');
    for (let i = 0; i < link.length; i++) {
      if(link[i].style.display=='none'){
        link[i].style.display='block';
      }
      else{
        link[i].style.display='none'; 
      }
    }
  }
    return (
      <React.Fragment>
      <div className='Contenedor-header'>
        <div className='Header-root'>
          <div className='Main-header'> 
            <Link className="titulo-link" to="/"> 
              <h1> 
                PORTfOLIO
              </h1>
            </Link>
            <div  className='titulo-menu'>
              <i  onClick={clickMenu} class="fa-solid fa-bars"></i>
            </div> 
          </div> 
          <div className='Main-menu'>
            <ul type='none'>
              <li className="Nav-item">
                <Link className="titulo-link" to="/Presentacion">
                  <span>Presentacion</span>
                </Link>
              </li>
              <li className="Nav-item">
                <Link className="titulo-link" to="/Proyectos">
                  <span>Proyectos</span>
                </Link>
              </li>
              <li className="Nav-item">
                <Link className="titulo-link" to="/Datos">
                  <span>Datos</span>
                </Link>
              </li>
              <li className="Nav-item">
                <Link className="titulo-link" to="/Redes">
                  <span>Redes</span>
                </Link></li>
            </ul>
          </div>
        </div>
        <div className='Enlaces-header'>
          <Switch>
              <Route exact path="/">
                <Main />
              </Route>  
              <Route path="/Presentacion">
                <Presentacion />
              </Route>
              <Route path="/Datos">
                <Datos />
              </Route>
              <Route path="/Proyectos">
                <Proyectos />
              </Route>
              <Route path="/Redes">
                <Redes />
              </Route>
              <Route component={NotFound} />
          </Switch>
        </div>  
      </div> 
      </React.Fragment>
    );
  }
  
export default Header;