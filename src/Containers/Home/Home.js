import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../Components/Login/Login';
import Signup from '../../Components/Signup/Signup';
import classes from './Home.css';
import Navigation from '../../Components/Navigation/Navigation';
import HomePage from '../HomePage/HomePage';
import Products from '../Products/Products';
import Cart from '../../Components/Cart/Cart';

class Home extends Component {
  
    render() {
    return (
      <div>
        <Navigation />
        <div className={classes.Container}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/product/:id" exact component={Products} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;
