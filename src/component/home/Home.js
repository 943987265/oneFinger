import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Swiper from "swiper"
import "swiper/css/swiper.css"
import './Home.scss'

class Home extends Component {
    state = {
        swiperList: [],
        selectedList: []
    }
    componentDidMount() {
        axios.get("/getIndexLoopimg").then((res) => {
            this.setState({
                swiperList: res.wdata
            }, () => {
                new Swiper('.swiper-container', {
                    loop: true,
                    autoplay: {
                        disableOnInteraction: false,
                    },
                    height: 160,
                    pagination: {
                        el: '.swiper-pagination',
                        dynamicBullets: true,
                    }
                })
            })
        })
        axios.get("/getHotProducts").then((res) => {
            this.setState({
                selectedList: res.wdata
            }, () => {
                console.log(this.state.selectedList);
            })
        })
    }
    render() {
        return (
            <div className="home">
                <header>
                    <i className="icon icon-menu" onClick={this.props.history.push.bind(this, '/category')}></i>
                    <span>单指行街</span>
                    <i className="icon icon-soso"></i>
                </header>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {this.state.swiperList.map((ele, idx) => <div key={idx} className="swiper-slide">
                            <img src={ele.loopimg_url} alt=''/>
                        </div>)}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <nav>
                    {this.props.navList.map((ele, idx) => (<a href={ele.url} key={idx}>
                        <img src={ele.imgUrl} alt=''/>
                        <span>{ele.title}</span>
                    </a>))}
                </nav>
                <section className="home-merchant">
                    <h1>推荐商家</h1>
                    <ul>
                        {this.props.merchantList.map((ele, idx) => (<li onClick={this.props.history.push.bind(this, ele.url)} key={idx}>
                            <img src={ele.imgUrl} alt=''/>
                            <span>{ele.title}</span>
                        </li>))}
                    </ul>
                </section>
                <section className="home-selected">
                    <h1><span>好货平卖</span></h1>
                    <ul>
                        {this.state.selectedList.map((ele, idx) => (<li onClick={this.props.history.push.bind(this, ele.url)} key={idx}>
                            <img src={ele.product_url} alt=''/>
                            <p>{ele.product_name}</p>
                            <div>
                                <strong>￥{ele.product_price}</strong>
                                <del>￥{ele.product_origin_price}</del>
                            </div>
                        </li>))}
                    </ul>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        navList: state.navList,
        merchantList: state.merchantList
    }
}

export default connect(mapStateToProps, null)(withRouter(Home))
