import React from 'react';
import { render } from '@testing-library/react';
import './Desayuno.scss';
import cafeA from '../../assets/img/cafe americano.png';
import cafeL from '../../assets/img/cafe con leche.png';
import sandw from '../../assets/img/sandwich.png';
import jugo from '../../assets/img/jugo.png'


const Desayuno = () => {
    render()
    return(
        <div>
            <table className="containerDesayuno">
            <h2>Desayuno</h2>
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
            </table>
        </div>
    )
}

export default Desayuno;