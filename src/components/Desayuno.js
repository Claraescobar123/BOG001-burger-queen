import React from 'react';
import { render } from '@testing-library/react';
import './Desayuno.scss';
import cafeA from '../img/cafe americano.png';
import cafeL from '../img/cafe con leche.png';
import sandw from '../img/sandwich.png';
import jugo from '../img/jugo.png'


const Desayuno = () => {
    render()
    return(
        <div className="containerDesayuno">
            <h2>Desayuno</h2>
            <table>
                <tr>
                    <img src={cafeA} alt="cafe" width="60px" height="60px"/>
                    <td>Café Americano</td>
                    <td>$</td>
                    <td>5</td>
                </tr>
                <tr>
                    <img src={cafeL} alt="cafeLeche" width="50px" height="50px"/>
                    <td>Café con Leche</td>
                    <td>$</td>
                    <td>7</td>
                </tr>
                <tr>
                    <img src={sandw} alt="sandwich" width="50px" height="40px"/>
                    <td>Sandwich de Jamón y Queso</td>
                    <td>$</td>
                    <td>10</td>
                </tr>
                <tr>
                    <img src={jugo} alt="jugo" width="40px" height="50px"/>
                    <td>Jugo de Frutas Natural</td>
                    <td>$</td>
                    <td placeholder="$">7</td>
                </tr>
            </table>
        </div>
    )
}

export default Desayuno;