import React, { Component } from 'react'
import './Mine.scss'

export default class Mine extends Component {
    render() {
        return (
            <div className="mine">
                <section>
                    <div className="user-img">
                        <div>
                            <img src="images/user-img0.jpg" />
                        </div>
                    </div>
                    <div className="user-order">
                        <div className="order-header">
                            <div>
                                <img src="images/order.png" />
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
                            <img src="images/collect.png" />
                            <span>好想买嘎</span>
                        </div>
                        <p>2</p>
                    </div>
                    <div className="mine-nav">
                        <div>
                            <img src="images/service.png" />
                            <span>有嘀嘢问</span>
                        </div>
                        <p></p>
                    </div>
                    <div className="mine-nav">
                        <div>
                            <img src="images/about.png" />
                            <span>哩個产品</span>
                        </div>
                        <p></p>
                    </div>
                    <div className="mine-nav">
                        <div>
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/set.png" />
                            <span>玩吓设置</span>
                        </div>
                        <p></p>
                    </div>
                </nav>
            </div>
        )
    }
}
