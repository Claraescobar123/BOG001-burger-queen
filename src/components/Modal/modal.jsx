import React from "react";
import "../Modal/modal.scss";
//import MenuItem from "../shared/menuItem";
//import data from "../../data/menu.json";     
        
const Modal = () => {   
    return(
            <input type="select" label="Multiple Select" multiple>
              <option value="">Adiciones</option>
              <option value="Cheese">Queso</option>
              <option value="Egg">Huevo</option>
            </input>
          /*<button type="submit" class="btn"></button>*/
        );
    };

export default Modal;
