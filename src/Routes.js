import React from 'react'
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';

import Login from './Container/login/login';
import SignUp from './Container/signup/signup';
import Home from './Container/home'
import History from './History';

class Routers extends React.Component {
  render() {
    return (
        <Router history = {History}>
        <Switch>   
          <Route exact path="/" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/home" component={Home}/>

          {/* <Route path="/topics" component={Topics}/> */}
        </Switch>
      </Router>
      
    )
  }
}
export default Routers;