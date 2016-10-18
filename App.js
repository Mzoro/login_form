var request = require('superagent');
var config = require('./superagent-mock-config.js');
var logger = function(log)  {
  console.log('superagent call', log);
};
var superagentMock = require('superagent-mock')(request, config, logger);

import React from 'react';
import LoginForm from './LoginForm'
import Logged from './Logged'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isValid: true,
      isWaiting: false,
      isLogged: false,
      login: {}
    }
  }
  
  changeLogin(event) {
    this.state.login.userName = event.target.value
    this.setState({ login : this.state.login })
  }

  changePassword(event) {
    this.state.login.password = event.target.value
    this.setState({ login : this.state.login })
  }

  handleSubmit() {
    this.state.isWaiting = true
    this.setState({ isWaiting : this.state.isWaiting })
    setTimeout(this.handleLogin.bind(this), 3000);
  }

  handleLogin () {
    request
    .post('/login.json')
    .send({ login: this.state.login })
    .end( (err, res) => {
      this.state.response = res
      this.setState({ response: res});
    });
    this.state.isWaiting = false
    this.setState({ isWaiting : this.state.isWaiting })
    if (this.state.response[0]['Auth'] == 'Denied') {
      this.state.isValid = false
      this.setState({ isValid: this.state.isValid });
    }
    if (this.state.response[0]['Auth'] == 'Logged') {
      this.state.isLogged = true
      this.setState({ isLogged: this.state.isLogged });
    }
  }
  render(){
    return (
      <div className='row'>
        {this.state.isLogged ? <Logged /> : <LoginForm isValid={this.state.isValid}
                                                       isWaiting={this.state.isWaiting}   
                                                       changeLogin={this.changeLogin.bind(this)} 
                                                       changePassword={this.changePassword.bind(this)} 
                                                       handleSubmit= {this.handleSubmit.bind(this)}/>}
      </div>
    );
  }
}

export default App