import React, { Component } from 'react';
import './index.css';

import Logo from '../../assets/images/logo.png'

/**
 * 登陆的组件
 * 
 */

class Login extends Component {
  render() {
    return (
      <div className="login">
        <header className="login_header">
          <img src={Logo} alt="Logo"  />
          <h1>React实战后台管理系统</h1>
        </header>
        <section className="login_content">
          <h2>用户登陆</h2>
          <div>Form 组件</div>
        </section>
      </div>
    );
  }
}

export default Login;