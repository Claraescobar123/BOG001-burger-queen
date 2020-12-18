//dependencies
import React, { useState } from "react";
import { Link } from "react-router-dom";

//components
import burger from "../../assets/img/LogoBurgerlab.png";
import portada from "../../assets/img/FondoAjustado.png";

//include
import "./Home.scss";

//Run
const Home = () => { 

  const [name, setName] = useState("");

  const employee = (e) => {
    setName(e.currentTarget.value);
  };

  const logIn = () => {
    if (name !== "") {
      localStorage.setItem("employ", name);
    } else {
      console.log("no hay nombre");
    }
  };

  return (
    <div className="Home">
      <img src={burger} className="Burger-logo" alt="logo" />
      <img src={portada} className="Portada" alt="portada" />
      <p className="Slogan">Armala - Comela - Disfrutala</p>
      <div className="nameSection">
        <input
          type="text"
          className="nameEmployee"
          id="nameEmployee"
          placeholder="Ingresa tu nombre"
          onChange={(e) => employee(e)}
        />
      </div>
      <p className="Rol">¿Cual es tu rol?</p>
      <div className="rolSection">
        <Link to={name !== "" ? "/new-order" : "/"}>
          <button className="buttonOne" onClick={logIn}>
            Mesero
          </button>
        </Link>
        <Link to={name !== "" ? "/orders" : "/"}>
          <button className="buttonTwo" onClick={logIn}>
            Chef
          </button>
        </Link>
      </div>

      <footer className="footer">
        <p> Todos los derechos reservados - |A.C.D| &copy; - BurgerLab </p>
      </footer>
    </div>
  );
};

export default Home;
