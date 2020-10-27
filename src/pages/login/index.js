import React, { Component } from "react";
import "./index.less";

import { Form, Input, Button, Checkbox } from "antd";

import Logo from "../../assets/images/logo.png";

/**
 * 登陆的组件
 *
 */
// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };
// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16,
//   },
// };

// const Demo = () => {
//   const onFinish = (values) => {
//     console.log('Success:', values);
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

class Login extends Component {
  constructor() {
    super()
    this.state = {
      layout:{
        labelCol: {
              span: 8,
            },
            wrapperCol: {
              span: 16,
            },
      },
      tailLayout : {
          wrapperCol: {
            offset: 8,
            span: 16,
          },
        }

    }
    this.onFinish = this.onFinish.bind(this);
    this.onFinishFailed = this.onFinishFailed.bind(this);
  }
  onFinish(){

  }
  onFinishFailed() {

  }

  render() {
    return (
      <div className="login">
        <header className="login_header">
          <img src={Logo} alt="Logo" />
          <h1>React实战后台管理系统</h1>
        </header>
        <section className="login_content">
          <h2>用户登陆</h2>
          <div>
            <Form
              {...this.state.layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item
                label="登录名"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "用户名不能为空",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "密码不能为空!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                {...this.state.tailLayout}
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>记住我</Checkbox>
              </Form.Item>

              <Form.Item {...this.state.tailLayout}>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
