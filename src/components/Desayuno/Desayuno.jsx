import React from 'react';
import './Desayuno.scss';
import cafeA from '../../assets/img/cafe americano.png';
import cafeL from '../../assets/img/cafe con leche.png';
import sandw from '../../assets/img/sandwich.png';
import jugo from '../../assets/img/jugo.png'

const Desayuno = () => {
    const openMenu = (e, name) => {
        e.preventDefault();
        console.log('El link fue clickeado');
        let i, content;
    
        content = document.getElementsByClassName("menuContent");
        for(i = 0; i < content.length; i++){
            content[i].style.display ="none";
        }
    }
    return(
        <div>
            <table className="containerDesayuno">
            <button className="tabla" onClick={openMenu}> Desayuno </button>
            <div className="menuContent">
                <tr>
                    <button className="menuD">
                        <img src={cafeA} alt="cafe" width="60px" height="60px"/>
                        <td>Café Americano</td>
                        <td>$</td>
                        <td className="cafeA">5</td>
                    </button>
                </tr>
                <tr>
                    <button className="menuD">
                        <img src={cafeL} alt="cafeLeche" width="50px" height="50px"/>
                        <td>Café con Leche</td>
                        <td>$</td>
                        <td className="cafeL">7</td>
                    </button>
                </tr>
                <tr>
                    <button className="menuD">
                        <img src={sandw} alt="sandwich" width="50px" height="40px"/>
                        <td>Sandwich de Jamón y Queso</td>
                        <td>$</td>
                        <td className="sandw">10</td>
                    </button>
                </tr>
                <tr>
                    <button className="menuD">
                        <img src={jugo} alt="jugo" width="40px" height="50px"/>
                        <td>Jugo de Frutas Natural</td>
                        <td>$</td>
                        <td className="jugo">7</td>
                    </button>
                </tr>
            </div>
            </table>
        </div>
    )
}

export default Desayuno;