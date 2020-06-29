import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Switch, } from 'react-router-dom'

function Index() {
  return <h1>首页</h1>
}

function Happy() {
  return <h1>哈哈</h1>
}

function Speechless() {
  return <h1>呵呵</h1>
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/happy">哈哈</Link>
          </li>
          <li>
            <Link to="/speechless">呵呵</Link>
          </li>
        </ul>

        <Route path="/" exact component={Index}/>
        <Route path="/happy" component={Happy}/>
        <Route path="/speechless" component={Speechless}/>
      </Router>
    )
  }
}
