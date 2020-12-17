//dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import Naver from '../components/naver/Naver';
import Header from '../components/header/Header';
import Client from '../components/client/Client';
import Order from '../components/order/Order';
import Breakfast from '../components/Desayuno/Desayuno';

const waiter = () => {
    return (
        <Router>
            <div className="viewWaiter">
                <Route path='*' component={Header} />
                <Route path='*' component={Naver} />
                <Route path='*' component={Client} />
                <Route path='*' component={Breakfast} />
                <Route path='*' component={Order} />                
            </div>
        </Router>
    )
}

export default waiter;
