import React, { Component } from 'react'
import axios from 'axios'
import { withRouter, HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

class Category extends Component {
    state = {
        categoryList: [],
        activeIdx: 0
    }
    componentDidMount() {
        axios.get("/getCategorys").then((res) => {
            this.setState({
                categoryList: res.wdata
            }, () => {
                console.log(this.state.categoryList[this.state.activeIdx].sub_category);
            })
        })
    }
    render() {
        return (
            <div className="category">
                <header>
                    <i className="icon icon-return" onClick={this.props.history.push.bind(this, '/')}></i>
                    <span>分类</span>
                </header>
                <section>
                    <ul className="category-nav">
                        {this.state.categoryList.map((ele, idx) => (<li key={idx} onClick={this.setState.bind(this, { activeIdx: idx })}>
                            {ele.category_name}
                        </li>))}
                    </ul>
                    {/* <ul className="category-content">
                        {this.state.categoryList[this.state.activeIdx].sub_category.map((ele, idx) => (<li key={idx}>
                        </li>))}
                    </ul> */}
                </section>
            </div>
        )
    }
}

export default withRouter(Category)