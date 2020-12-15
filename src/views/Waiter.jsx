//dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import Naver from "../components/naver/Naver";
import Header from "../components/header/Header";
import Client from "../components/client/Client";
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
