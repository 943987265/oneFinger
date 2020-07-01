import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './Cart.scss'

class Cart extends Component {
    state = {
        cartList: []
    }
    componentDidMount() {
        axios.post("/getCarts").then((res) => {
            console.log(res);
            this.setState({
                cartList: res.wdata
            }, () => {
                console.log(this.state.cartList);
            })
        })
    }
    render() {
        return (
            <div className="cart">
                <header>
                    <i className="icon icon-return" onClick={this.props.history.push.bind(this, '/')}></i>
                    <span>单指行街</span>
                    <a onClick={this.props.history.push.bind(this, '/comment')}>编辑</a>
                </header>
                <ul>

                </ul>
            </div>
        )
    }
}

export default withRouter(Cart)
