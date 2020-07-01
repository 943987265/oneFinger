import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './TabBar.scss'

class TabBar extends Component {
    render() {
        return (
            <div className="main">
                {this.props.children}
                <div className="tab-bar">
                    <ul>
                        {this.props.tabBarList.map((ele, idx) => (<li onClick={this.props.history.push.bind(this, ele.path)} key={idx}>
                            <i className={`icon icon-my${this.props.location.pathname === ele.path ? '-o' : ''}`}></i>
                            <span className={this.props.location.pathname === ele.path ? 'tb-selected' : ''}>{ele.title}</span>
                        </li>))}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tabBarList: state.tabBarList
    }
}

export default connect(mapStateToProps, null)(withRouter(TabBar))