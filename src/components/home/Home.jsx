import React from "react";
import burger from '../../assets/img/LogoBurgerlab.png';
import portada from '../../assets/img/Fondo.png';
import './Home.scss';

const Home = () => {
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
        <button className="buttonThree">Ingresar</button>
        </div>
    </div>
  );
};


export default Home;
