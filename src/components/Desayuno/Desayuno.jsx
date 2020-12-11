import React from "react";
import "./Desayuno.scss";
import MenuItem from '../shared/menuItem'
import data from '../../data/menu.json';

const Desayuno = () => {
  const openMenu = (e, name) => {
    e.preventDefault();
    console.log("El link fue clickeado");
    let i, content;

    content = document.getElementsByClassName("menuContent");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
  };
  return (
    <div>
      <table className="containerDesayuno">
        <button className="tabla" onClick={openMenu}>
          {" "}
          Desayuno{" "}
        </button>
        <div className="menuContent">
            <MenuItem srcImg={data[0].img} txtLabel={data[0].name} altImg={data[0].id} class={data[0].id} price={data[0].price} />
            <MenuItem srcImg={data[1].img} txtLabel={data[1].name} altImg={data[1].id} class={data[1].id} price={data[1].price} />
            <MenuItem srcImg={data[2].img} txtLabel={data[2].name} altImg={data[2].id} class={data[2].id} price={data[2].price} />
            <MenuItem srcImg={data[3].img} txtLabel={data[3].name} altImg={data[3].id} class={data[3].id} price={data[3].price} />
        </div>
      </table>
    </div>
  );
};

export default Desayuno;
