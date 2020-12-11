import React from "react";

const MenuItem = (props) => {
    //srcImg
    //altImg
    //txtLabel
    //class
    //price
  return (
    <tr>
      <button className="menuD">
        <img src={props.srcImg} alt={props.altImg} width="60px" height="60px" />
        <td>{props.txtLabel}</td>
        <td>$</td>
        <td className={props.class}>{props.price}</td>
      </button>
    </tr>
  );
};

export default MenuItem;
