import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Comment.scss'

class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <header>
                    <i className="icon icon-return" onClick={this.props.history.goBack.bind(this)}></i>
                    <span>分享</span>
                </header>
                <section>
                    <textarea maxLength="50" placeholder="哩一刻，你系度谂乜啊？(50字内)" rows="4"></textarea>
                    <div>
                        <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/f_addimg.png" alt=''/>
                        <input type="file" accept="image/*" />
                    </div>
                    <button>提交</button>
                </section>
            </div>
        )
    }
}

export default withRouter(Comment)