import React from 'react';
import './AlmuerzoCena.scss';

import imagenHamb from '../../assets/img/hamburguesa-con-queso.png';
import hambSencilla from '../../assets/img/hamburguesa simple.png';
import hambDoble from '../../assets/img/hamburguesa doble.png';
import imagenAcomp from '../../assets/img/acompañamiento.png';
import papasFrit from '../../assets/img/papas fritas.png';
import arosCeb from '../../assets/img/aros de cebolla.png';
import bebidas from '../../assets/img/bebidas.png';
import agua from '../../assets/img/agua.png';
import gaseosa from '../../assets/img/gaseosa.png';


const Almuerzo = () => {
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
            <table className="containerAlmuerzo">
            <button className="tabla" onClick={openMenu}> Desayuno </button>
            <div className="menuContent">
            <p>Hamburguesas
                <img src={imagenHamb} alt="imgHamb" width="30px" height="35px" />
            </p>
            <tr>
                <button className="menuA">
                    <img src={hambSencilla} alt="hambS" width="50px" height="35px" />
                    <td>Hamburguesa Sencilla</td>
                    <td>$</td>
                    <td>10</td>
                    <select name="clases" id="claseC">
                        clase carne:
                        <option value="res">Res</option>
                        <option value="pollo">Pollo</option>
                        <option value="veggie">Veggie</option>
                    </select>
                    <select name="add" id="adiciones">
                        Adiciones:
                        <option value="1">Huevo</option>
                        <option value="1">Queso</option>
                    </select>
                </button>
            </tr>
            <tr>
                <button className="menuA">
                    <img src={hambDoble} alt="hambD" width="50px" height="50px"/>
                    <td>Hamburguesa doble</td>
                    <td>$</td>
                    <td>15</td>
                    <select name="clases" id="claseC">
                        clase carne:
                        <option value="res">Res</option>
                        <option value="pollo">Pollo</option>
                        <option value="veggie">Veggie</option>
                    </select>
                    <select name="add" id="adiciones">
                        Adiciones:
                        <option value="1">Huevo</option>
                        <option value="1">Queso</option>
                    </select>
                </button>
            </tr>
            <p>Acompañamientos
            <img src={imagenAcomp} alt="imgAcomp" width="30px" height="30px" />
            </p>
            <tr>
                <button className="menuA">
                    <img src={papasFrit} alt="papasF" width="35px" height="40px"/>
                    <td>Papas Fritas</td>
                    <td>$</td>
                    <td>5</td>
                </button>
            </tr>
            <tr>
                <button className="menuA">
                    <img src={arosCeb} alt="arosCebolla" width="40px" height="40px"/>
                    <td>Aros de Cebolla</td>
                    <td>$</td>
                    <td>5</td>
                </button>
            </tr>
            <p>Bebidas
            <img src={bebidas} alt="bebidas" width="40px" height="30px" />
            </p>
            <tr>
                <button className="menuA">
                    <img src={agua} alt="agua500" width="40" height="40" />
                    <td>Agua 500ml</td>
                    <td>$</td>
                    <td>5</td>
                </button>
            </tr>
            <tr>
                <button className="menuA">
                    <img src={agua} alt="agua750" width="50" height="50" />
                    <td>Agua 750ml</td>
                    <td>$</td>
                    <td>7</td>
                </button>
            </tr>
            <tr>
                <button className="menuA">
                    <img src={gaseosa} alt="gaseosa500" width="40" height="40" />
                    <td>Gaseosa 500ml</td>
                    <td>$</td>
                    <td>7</td>
                </button>    
            </tr>
            <tr>
                <button className="menuA">
                    <img src={gaseosa} alt="gaseosa750" width="50" height="50" />
                    <td>Gaseosa 750ml</td>
                    <td>$</td>
                    <td>10</td>    
                </button>
            </tr>
            </div>
            </table>
        </div>
    )
}

export default Almuerzo;