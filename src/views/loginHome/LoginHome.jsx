import React from 'react'
import LoginFormPart from 'components/loginFormPart/LoginFormPart'
import RegisterFormPart from 'components/registerFormPart/RegisterFormPart'
import ResetParrwordPart from 'components/resetParrwordPart/ResetParrwordPart'
import Store from 'myRedux/Store'

import './LoginHome.scss'
import 'css/animate.css'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.setState((preState, props) => ({
            ...preState,
            ...Store.getState()
        }));

        Store.subscribe(() => {
            this.setState((preState, props) => ({
                ...preState,
                ...Store.getState()
            }));
        });
    }

    render() {
        return (
            <div className="login-page">
                <div className="bg-bubble">
                    <img src={this.getImage("login-bg-bubble-01.png")} alt="login-bg-bubble" />
                    <img src={this.getImage("login-bg-bubble-02.png")} alt="login-bg-bubble" />
                    <img src={this.getImage("login-bg-bubble-03.png")} alt="login-bg-bubble" />
                    <img src={this.getImage("login-bg-bubble-04.png")} alt="login-bg-bubble" />
                </div>

                <div className="logo-and-slogan">
                    <img src={this.getImage("logo.svg")}></img>
                    <span className="slogan">时光序 | 最好用的时间管理工具</span>
                </div>

                <div className="login-content">
                    { this.controlPartShow() }
                    <div className="about-link">
                        <span>广州奇创信息科技有限公司</span>
                        <a href="#">www.shiguangxu.com</a>
                        <span>2017-2019 © All Rights Reserved</span>
                        <img src={this.getImage("police-icon.png")} alt="police-icon" />
                        <a href="3">粤公网安备 44010602006951号</a>
                        <span>|</span>
                        <a href="#">粤ICP备 18009376号</a>
                    </div>
                </div>
            </div>
        );
    }

    controlPartShow = () => {
        if (this.state.isLoginPartShow) {
            return (<LoginFormPart />)
        }
        if (this.state.isRegisterPartShow) {
            return (<RegisterFormPart />)
        }
        if (this.state.isResetPasswordPartShow) {
            return (<ResetParrwordPart />)
        }
    }

    getImage(imageName) {
        return require(`images/${imageName}`);
    }

}

export default Login;