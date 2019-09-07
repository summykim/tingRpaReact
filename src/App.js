import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import UserInfo from './pages/UserInfo';
import AgentInfo from './pages/AgentInfo';
import JobInfo from './pages/JobInfo';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import About from './pages/About';
 
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about/:username" component={About}/>
            <Route path="/userList" component={UserInfo}/>
            <Route path="/agentList" component={AgentInfo}/>
            <Route path="/jobList" component={JobInfo}/>
            <Route path="/login" component={Login}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
 
export default App;
