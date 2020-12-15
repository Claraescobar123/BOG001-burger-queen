/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Menu.scss";
import MenuItem from "../shared/menuItem";
import data from "../../data/menu.json";

const Menu = () => {
  let select1 , select2;
  select1 = document.getElementsByClassName("printBreak");
  select2 = document.getElementsByClassName("printLunch");

  const breakf = () =>{
    for (let i = 0; i < select1.length; i++) {
      select2[i].style.display = "none";
      select1[i].style.display = "flex";
    }    
  }

  const lunch = () =>{
    for (let i = 0; i < select2.length; i++) {
      select1[i].style.display = "none";
      select2[i].style.display = "flex";
    }  
  }


  return (
    <div className="containerMenu">
      <ul>
        <li className="menuBreakfast">
          <a href="#" onClick={breakf}>DESAYUNO</a>
          <div className="items">
            <ul className="printBreak">
              <MenuItem
                srcImg={data[0].img}
                txtLabel={data[0].name}
                altImg={data[0].id}
                class={data[0].id}
                price={data[0].price}
              />
              <MenuItem
                srcImg={data[1].img}
                txtLabel={data[1].name}
                altImg={data[1].id}
                class={data[1].id}
                price={data[1].price}
              />
              <MenuItem
                srcImg={data[2].img}
                txtLabel={data[2].name}
                altImg={data[2].id}
                class={data[2].id}
                price={data[2].price}
              />
              <MenuItem
                srcImg={data[3].img}
                txtLabel={data[3].name}
                altImg={data[3].id}
                class={data[3].id}
                price={data[3].price}
              />
            </ul>
          </div>
        </li>
        <li className="menuLunch">
          <a href="#" onClick={lunch}>ALMUERZO/CENA</a>
          <div className="items">
            <ul className="printLunch">
              <MenuItem
                srcImg={data[4].img}
                txtLabel={data[4].name}
                altImg={data[4].id}
                class={data[4].id}
                price={data[4].price}
              />
              <MenuItem
                srcImg={data[5].img}
                txtLabel={data[5].name}
                altImg={data[5].id}
                class={data[5].id}
                price={data[5].price}
              />
              <MenuItem
                srcImg={data[6].img}
                txtLabel={data[6].name}
                altImg={data[6].id}
                class={data[6].id}
                price={data[6].price}
              />
              <MenuItem
                srcImg={data[7].img}
                txtLabel={data[7].name}
                altImg={data[7].id}
                class={data[7].id}
                price={data[7].price}
              />
              <MenuItem
                srcImg={data[8].img}
                txtLabel={data[8].name}
                altImg={data[8].id}
                class={data[8].id}
                price={data[8].price}
              />
              <MenuItem
                srcImg={data[9].img}
                txtLabel={data[9].name}
                altImg={data[9].id}
                class={data[9].id}
                price={data[9].price}
              />
              <MenuItem
                srcImg={data[10].img}
                txtLabel={data[10].name}
                altImg={data[10].id}
                class={data[10].id}
                price={data[10].price}
              />
              <MenuItem
                srcImg={data[11].img}
                txtLabel={data[11].name}
                altImg={data[11].id}
                class={data[11].id}
                price={data[11].price}
              />
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
