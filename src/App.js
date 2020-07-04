import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './component/home/Home'
import Community from './component/community/Community'
import Cart from './component/cart/Cart'
import Mine from './component/mine/Mine'
import TabBar from './component/tabBar/TabBar'
import Category from './component/category/Category'
import Merchant from './component/merchant/Merchant'
import Comment from './component/comment/Comment'
import Login from './component/login/Login'
import Sign from './component/sign/Sign'
import axios from 'axios'

import './App.css'

axios.defaults.baseURL = 'http://s.linweiqin.com/api/s';
axios.interceptors.response.use(response => {
  return response.data;
}, error => {
  return Promise.reject(error);
});

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => <TabBar><Home></Home></TabBar>} />
          <Route path="/community" exact render={() => <TabBar><Community></Community></TabBar>} />
          <Route path="/cart" exact render={() => <TabBar><Cart></Cart></TabBar>} />
          <Route path="/my" exact render={() => <TabBar><Mine></Mine></TabBar>} />
          <Route path="/category" exact render={() => <Category></Category>} />
          <Route path="/merchant" exact render={() => <Merchant></Merchant>} />
          <Route path="/comment" exact render={() => <Comment></Comment>} />
          <Route path="/login" exact render={() => <Login></Login>} />
          <Route path="/sign" exact render={() => <Sign></Sign>} />
          <Redirect to="/"></Redirect>
        </Switch>
      </Router>
    )
  }
}
