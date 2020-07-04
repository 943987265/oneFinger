import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import './Category.scss'

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
                console.log(this.state.categoryList[this.state.activeIdx]);
            })
        })
    }
    shiftNav = idx => {
        this.setState({ activeIdx: idx });
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
                        {this.state.categoryList.map((ele, idx) => (<li key={idx} onClick={this.shiftNav.bind(this, idx)} className={this.state.activeIdx === idx ? 'category-active' : ''}>
                            {ele.category_name}
                        </li>))}
                    </ul>
                    {/* <ul className="category-content">
                        {this.state.categoryList[this.state.activeIdx].sub_category.map((ele, idx) => (<li key={idx}>
                        </li>))}
                    </ul> */}
                    <div className="category-content">
                        {this.state.activeIdx + 1}
                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(Category)