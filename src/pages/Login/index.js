import React, { Component } from 'react';
import './index.less';
import { encryption } from '../../util/index.js'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
  }

  handleChangeOne = (event) => {
    this.setState({
      name: event.target.value
    });
  }
  handleChangeTwo = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  loginClick() {
    const params = {
      username: this.state.name,
      password: encryption(this.state.password),
      grant_type: 'password',
      scope: 'server',
      code: 'xysi',
      randomStr: ''
    }
    window._.$api.login(params).then(res => {
      if (res.data.state) {
        window.localStorage.token = res.data.data.token

      }
    })
  }

  render() {
    let state = this.state
    return (
      <div className="Login">
        <img src={require('../../image/logo_2.png')} className="logo_Image" alt="logo"></img>
        <div className="Login_Content">
          <div className="flex Login_header">
            <h3 className="Login_header_tip">欢迎登录</h3>智橙移动优化后台
          </div>

          <div className="Login_Center">
            <div className="flex Login_Center_input">
              <i className="fa fa-camera-retro"></i>
              <input type="text" placeholder="请输入用户名" className="inputName" value={state.name} onChange={this.handleChangeOne} />
            </div>
            <div className="flex Login_Center_input">
              {/* <img src="" className="pic_image"></img> */}
              <input type="password" placeholder="请输入密码" className="inputName" value={state.password} onChange={this.handleChangeTwo} />
            </div>
            <button className="button_Name" onClick={() => this.loginClick()}>登录</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
