import React from "react";
import burger from '../../assets/img/LogoBurgerlab.png';
import portada from '../../assets/img/Fondo.png';
import { Link } from "react-router-dom";
//import waiter from "../../views/Waiter"
import './Home.scss';

const Home = () => {
  /*const eventClick = () => {
    console.log("Hola soy un botón");
  }*/
  return (
    <div className="Home">
        <img src={burger} className="Burger-logo" alt="logo" />
        <img src={portada} className="Portada" alt="portada" />
        <p className= "Slogan">Armala - Comela - Disfrutala</p>
        <p className= "Rol">¿Cual es tu rol?</p>
        <div className="rolSection">
        <button className="buttonOne">Mesero</button> 
        <button className="buttonTwo">Chef</button>
        <input type="text" className="nameEmployee" placeholder="Ingresa tu nombre y apellido" required title="Llena el campo"/>
        <Link to="/Waiter">
        <button className="buttonThree" /*onClick={eventClick}*/ >Ingresar</button>
        </Link>
        </div>
    </div>
  );
};


export default Home;
