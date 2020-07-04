import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import axios from 'axios'
import './Cart.scss'

class Cart extends Component {
    state = {
        cartList: [false, false],
        cartCount: [1, 1],
        goodsList: []
    }
    // componentDidMount() {
    // axios.post("/getCarts").then((res) => {
    //     console.log(res);
    //     this.setState({
    //         goodsList: res.wdata
    //     }, () => {
    //         console.log(this.state.cartList);
    //     })
    // })
    // }
    changeChecked = idx => {
        let newChecked = Object.assign([], this.state.cartList);
        newChecked[idx] = !newChecked[idx];
        this.setState({ cartList: newChecked });
    }
    changeCount = (idx, val) => {
        let newCount = Object.assign([], this.state.cartCount);
        newCount[idx] += val;
        if (newCount[idx] > 0) {
            this.setState({ cartCount: newCount })
        }
    }
    render() {
        return (
            <div className="cart">
                <header>
                    <i className="icon icon-return" onClick={this.props.history.push.bind(this, '/')}></i>
                    <span>单指行街</span>
                    <a href="/#" onClick={this.props.history.push.bind(this, '/comment')}>编辑</a>
                </header>
                <ul>
                    <li>
                        <div className="goods-header">
                            <i className={`icon icon-radio${this.state.cartList[0] ? '-check' : ''}`} onClick={this.changeChecked.bind(this, 0)}></i>
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/sjlogo.png" alt=''/>
                            <span>海绵包包</span>
                        </div>
                        <div className="goods-content">
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/cp_gg.png" alt=''/>
                            <div className="product-text">
                                <h1>首款海绵包包</h1>
                                <p className="goods-options">颜色：黑色</p>
                                <div className="goods-price">
                                    <strong>￥68.00</strong>
                                    <div>
                                        <i className="icon icon-sub" onClick={this.changeCount.bind(this, 0, -1)}></i>
                                        <span>{this.state.cartCount[0]}</span>
                                        <i className="icon icon-add" onClick={this.changeCount.bind(this, 0, 1)}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="goods-header">
                            <i className={`icon icon-radio${this.state.cartList[1] ? '-check' : ''}`} onClick={this.changeChecked.bind(this, 1)}></i>
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/sjlogo.png" alt=''/>
                            <span>海绵包包</span>
                        </div>
                        <div className="goods-content">
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/cp_gg.png" alt=''/>
                            <div className="product-text">
                                <h1>首款海绵包包</h1>
                                <p className="goods-options">颜色：黑色</p>
                                <div className="goods-price">
                                    <strong>￥68.00</strong>
                                    <div>
                                        <i className="icon icon-sub" onClick={this.changeCount.bind(this, 1, -1)}></i>
                                        <span>{this.state.cartCount[1]}</span>
                                        <i className="icon icon-add" onClick={this.changeCount.bind(this, 1, 1)}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <footer>
                    <span>合计：￥{((this.state.cartList[0] ? this.state.cartCount[0] * 68 : 0) + (this.state.cartList[1] ? this.state.cartCount[1] * 68 : 0)).toFixed(2)}</span>
                    <button>埋单</button>
                </footer>
            </div>
        )
    }
}

export default withRouter(Cart)
