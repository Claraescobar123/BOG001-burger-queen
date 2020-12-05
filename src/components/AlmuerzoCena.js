import React from 'react';
import { render } from '@testing-library/react';
import './AlmuerzoCena.scss';

import imagenHamb from '../img/hamburguesa-con-queso.png';
import hambSencilla from '../img/hamburguesa simple.png';
import hambDoble from '../img/hamburguesa doble.png';
import imagenAcomp from '../img/acompañamiento.png';
import papasFrit from '../img/papas fritas.png';
import arosCeb from '../img/aros de cebolla.png';
import bebidas from '../img/bebidas.png';
import agua from '../img/agua.png';
import gaseosa from '../img/gaseosa.png';


const Almuerzo = () => {
    render()
    return(
        <div className="containerAlmuerzo">
            <h2>Almuerzo</h2>
            <p>Hamburguesas
                <img src={imagenHamb} alt="imgHamb" width="40px" height="35px" />
            </p>
            <table>
                <tr>
                    <img src={hambSencilla} alt="hambS" width="50px" height="35px" />
                    <td>Hamburguesa Sencilla</td>
                    <td>$</td>
                    <td>10</td>
                </tr>
                <tr>
                    <img src={hambDoble} alt="hambD" width="50px" height="50px"/>
                    <td>Hamburguesa doble</td>
                    <td>$</td>
                    <td>15</td>
                </tr>
                <p>Acompañamientos
                <img src={imagenAcomp} alt="imgAcomp" width="30px" height="30px" />
                </p>
                <tr>
                    <img src={papasFrit} alt="papasF" width="35px" height="40px"/>
                    <td>Papas Fritas</td>
                    <td>$</td>
                    <td>5</td>
                </tr>
                <tr>
                    <img src={arosCeb} alt="arosCebolla" width="40px" height="40px"/>
                    <td>Aros de Cebolla</td>
                    <td>$</td>
                    <td>5</td>
                </tr>
                <p>Bebidas
                <img src={bebidas} alt="bebidas" width="40px" height="30px" />
                </p>
                <tr>
                    <img src={agua} alt="agua500" width="40" height="40" />
                    <td>Agua 500ml</td>
                    <td>$</td>
                    <td>5</td>
                </tr>
                <tr>
                    <img src={agua} alt="agua750" width="50" height="50" />
                    <td>Agua 750ml</td>
                    <td>$</td>
                    <td>7</td>
                </tr>
                <tr>
                    <img src={gaseosa} alt="gaseosa500" width="40" height="40" />
                    <td>Gaseosa 500ml</td>
                    <td>$</td>
                    <td>7</td>
                </tr>
                <tr>
                    <img src={gaseosa} alt="gaseosa750" width="50" height="50" />
                    <td>Gaseosa 750ml</td>
                    <td>$</td>
                    <td>10</td>
                </tr>
            </table>
        </div>
    )
}

export default Almuerzo;