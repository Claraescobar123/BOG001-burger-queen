//dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import Naver from "../components/Naver/Naver";
import Header from "../components/Header/Header";
import Client from "../components/Client/Client";
import Order from "../components/Order/Order";
import Menu from "../components/Menu/Menu";

const waiter = () => {
  return (
    <Router>
      <div className="viewWaiter">
        <Route path="*" component={Header} />
        <Route path="*" component={Naver} />
        <Route path="*" component={Client} />
        <Route path="*" component={Menu} />
        <Route path="*" component={Order} />
      </div>
    </Router>
  );
};

export default waiter;
