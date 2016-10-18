import React from 'react';

class LoginForm extends React.Component {
  changeLogin(event) {
    this.props.changeLogin(event)
  }
  changePassword(event) {
    this.props.changePassword(event)
  }
  handleSubmit() {
    this.props.handleSubmit()
  }
  render() {
    const inputStyle = (this.props.isValid ? {} : {border: '1px solid red'} );
    const buttonSymbols = (this.props.isWaiting ?  
                            <span className="glyphicon glyphicon-cog" aria-hidden="true"></span> : 
                            <span>Login &rarr;</span> );
    return (
        <div className="col-md-2 col-md-offset-1 text-center">
          <span style={{ color: 'orange'}} className="glyphicon glyphicon-fire" aria-hidden="true"></span>
          Login
          <br /> 
          <input style={inputStyle} type="text" placeholder="Login" onChange={(e) => this.changeLogin(e)}/>
          <br /> 
          <input type="password" placeholder="Password" onChange={(e) => this.changePassword(e)}/> 
          <br /> 
          <button className="btn btn-default" 
                  onClick = {this.handleSubmit.bind(this)}
                  style={{borderRadius: '20px', color: 'blue', width: 80}}>
            {buttonSymbols}
          </button>
        </div>
    );
  }
}

export default LoginForm