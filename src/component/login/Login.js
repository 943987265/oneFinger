import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import axios from 'axios'
import './Login.scss'

class Login extends Component {
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
            <div className="login">
                
            </div>
        )
    }
}

export default withRouter(Login)