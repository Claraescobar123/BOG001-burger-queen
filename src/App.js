//dependencies
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Home from './views/Home/Home.jsx'
import Waiter from './views/Waiter.jsx';
import Orders from './views/Orders.jsx'

//includes
import './App.scss';

//Run
function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/new-order" exact component={Waiter} />
          <Route path="/orders" exact component={Orders} />
        </Switch>
      </Router>
    </>
  );
}

export default App;