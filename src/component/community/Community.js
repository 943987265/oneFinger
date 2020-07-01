import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Community.scss'

class Community extends Component {
    render() {
        return (
            <div className="community">
                <header>
                    <i className="icon icon-return" onClick={this.props.history.push.bind(this, '/')}></i>
                    <span>社区</span>
                    <i className="icon icon-addcommunity" onClick={this.props.history.push.bind(this, '/comment')}></i>
                </header>
                <ul>
                    <li>
                        <div className="community-user">
                            <img src="images/user-img0.jpg" />
                            <span>帅到不行</span>
                        </div>
                        <p>[潮流服饰]:秋季大换装，就在我的小店，欢迎参观哈....</p>
                        <div className="community-img">
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/s_sq_01.png" />
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/s_sq_02.png" />
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/s_sq_03.png" />
                        </div>
                        <div className="community-footer">
                            <span>刚刚</span>
                            <i className="icon icon-share"></i>
                        </div>
                    </li>
                    <li>
                        <div className="community-user">
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/user-img0.jpg" />
                            <span>帅到不行</span>
                        </div>
                        <p>[潮流服饰]:秋季大换装，就在我的小店，欢迎参观哈....</p>
                        <div className="community-img">
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/s_sq_04.png" />
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/s_sq_05.png" />
                            <img src="https://www.17sucai.com/preview/177065/2016-09-12/Sc-5/images/s_sq_06.png" />
                        </div>
                        <div className="community-footer">
                            <span>刚刚</span>
                            <i className="icon icon-share"></i>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default withRouter(Community)