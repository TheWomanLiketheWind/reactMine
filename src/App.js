import React, { Component } from 'react';
import login from './image/login.png'
import logo from './image/logo_2.png'
import './App.css';
// import 'font-awesome/less/font-awesome.less';
// import 'react-fontawesome';

function App() {
  return (
    <div className="Login">
      <img src={logo} className="logo_Image"></img>
      <div className="Login_Content">
        <div clascsName="flex Login_header">
          <h3 className="Login_header_tip">欢迎登录</h3>智橙移动优化后台
        </div>

        <div className="Login_Center">
          <div className="flex Login_Center_input">
            {/* <i className="fa fa-camera-retro"></i> */}
            <input type="text" placeholder="请输入用户名" className="inputName" />
          </div>
          <div className="flex Login_Center_input">
            <img src="" className="pic_image"></img>
            <input type="password" placeholder="请输入密码" className="inputName" />
          </div>
          <div className="flex Login_Center_input">
            <input type="number" placeholder="请输入验证码" className="inputName" />
            <button className="code_Name">获取验证码</button>
          </div>
          <button className="button_Name">登录</button>
        </div>

        {/* <img src={login} /> */}
      </div>
    </div>
  );
}

export default App;
