import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import axios from 'axios'
import './Sign.scss'

class Sign extends Component {
    state = {
        userInfo: JSON.parse(localStorage.getItem('oneFinger-userInfo')) || {}
    }
    // componentDidMount() {
    //     axios.get("/getHotProducts").then((res) => {
    //         this.setState({
    //             selectedList: res.wdata
    //         }, () => {
    //             console.log(this.state.selectedList);
    //         })
    //     })
    // }
    render() {
        return (
            <div className="mine">
                <section>
                    <div className="user-img">
                        {this.state.userInfo.oauth_token ?
                            (<div className="user-border">
                                <img src="images/user-img0.jpg" alt='' />
                            </div>) : 
                            (<div className="user-unlogin">
                                <button>登录</button>
                                <button>注册</button>
                            </div>)}
                    </div>
                    <div className="user-order">
                        <div className="order-header">
                            <div>
                                <img src="images/order.png" alt='' />
                                <span>我的订单</span>
                            </div>
                            <p>查看所有订单</p>
                        </div>
                        <ul>
                            <li>
                                <i className="icon icon-pay"></i>
                                <span>未俾钱</span>
                            </li>
                            <li>
                                <i className="icon icon-recieve"></i>
                                <span>仲未送</span>
                            </li>
                            <li>
                                <i className="icon icon-recieve-good"></i>
                                <span>收咗货</span>
                            </li>
                            <li>
                                <i className="icon icon-cancel"></i>
                                <span>唔想买</span>
                            </li>
                            <li>
                                <i className="icon icon-aftersale"></i>
                                <span>搞边科</span>
                            </li>
                        </ul>
                    </div>
                </section>
                <nav>
                    <div className="mine-nav">
                        <div>
                            <img src="images/collect.png" alt='' />
                            <span>好想买嘎</span>
                        </div>
                        <p>2</p>
                    </div>
                    <div className="mine-nav">
                        <div>
                            <img src="images/service.png" alt='' />
                            <span>有嘀嘢问</span>
                        </div>
                        <p></p>
                    </div>
                    <div className="mine-nav">
                        <div>
                            <img src="images/about.png" alt='' />
                            <span>哩個产品</span>
                        </div>
                        <p></p>
                    </div>
                    <div className="mine-nav">
                        <div>
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/set.png" alt='' />
                            <span>玩吓设置</span>
                        </div>
                        <p></p>
                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(Sign)