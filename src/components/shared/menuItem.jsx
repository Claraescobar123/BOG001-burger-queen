import React from "react";

const MenuItem = (props) => {
  //srcImg
  //altImg
  //txtLabel
  //class
  //price
  return (
    <li>
      <button className="menuItem">
        <div className="menuImg">
          <img
            src={props.srcImg}
            alt={props.altImg}
            width="60px"
            height="60px"
          />
        </div>
        <div className="menuLabel">
          <p>{props.txtLabel}</p>
          <p>$ {props.price}</p>
        </div>
      </button>
    </li>
  );
};

export default MenuItem;
