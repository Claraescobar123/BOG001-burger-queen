//dependencies
import React from "react";

//components
import burger from "../../assets/img/LogoBurgerlab.png";
import portada from "../../assets/img/FondoAjustado.png";

//include
import "./Home.scss";

//Run
const Home = () => {
  let nameEmp;
  nameEmp = document.getElementsByClassName("nameSection");

  const opWaiter = () =>{
    for (let i = 0; i < nameEmp.length; i++) {
      nameEmp[i].style.display = "flex";
    }    
  }

  const opChef = () =>{
    for (let i = 0; i < nameEmp.length; i++) {
      nameEmp[i].style.display = "flex";
    }    
  }
  /*const [name, setName] = useState('');
  const [error, setError] = useState('');

  const employee = (e) => {
    setName(e.currentTarget.value);
  };

  const login = () => {
    if (name !== '') {
      localStorage.setItem('employ', name);
    } else {
      setError( "Escribe tu nombre");
    }
  };*/

  return (
    <div className="Home">
      <img src={burger} className="Burger-logo" alt="logo" />
      <img src={portada} className="Portada" alt="portada" />
      <p className="Slogan">Armala - Comela - Disfrutala</p>
      <p className="Rol">¿Cual es tu rol?</p>
      <div className="rolSection">
        <button className="buttonOne" onClick={opWaiter}>Mesero</button>
        <button className="buttonTwo" onClick={opChef}>Chef</button>
      </div>
      <div className="nameSection">
        <input
          type="text"
          className="nameEmployee"
          placeholder="Ingresa tu nombre"
          //onChange={(e) => employee(e)}
          required
          title="Llena el campo"
        />
        <button className="buttonThree" >
          <i class="fas fa-arrow-alt-circle-right"></i>
        </button>
      </div>
      <footer className="footer">
        <p> Todos los derechos reservados - |A.C.D| &copy; - BurgerLab </p>
      </footer>
    </div>
  );
};

export default Home;
