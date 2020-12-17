import "./App.scss";
import React from "react";
import Home from "./components/home/Home.jsx";
//import Naver from './components/naver/Naver.jsx'
//import Header from './components/header/Header.jsx'
//import Footer from './components/home/Footer.jsx';
import Waiter from "./views/Waiter.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new-order" exact component={Waiter}/>
      </Switch>
    </Router>
    </>
    /*<Header />,
    <Naver />*/
  );
}

export default App;
