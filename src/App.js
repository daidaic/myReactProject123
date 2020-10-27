/**
 * 应用的根组件
 */
import React,{Component} from 'react'
import 'antd/dist/antd.css';
// import { Button } from 'antd';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import Login from './pages/login'

import Admin from './pages/admin'
// export default function App(){
//   return (
//     <div id="root">

//     </div>
//   )
// }

export default class App extends Component {

  render(){
    return (
      <Router >
        <Switch> 
          {/* 只匹配其中的一个 */}
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Admin} />
        </Switch>
      </Router>
    )
  }
}