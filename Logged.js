import React from 'react';

class Logged extends React.Component {
  render() {
    return (
        <div className="col-md-2 col-md-offset-1 text-center"> 
          <span className="glyphicon glyphicon-ok" aria-hidden="true" style={{color: 'green'}}></span>
          Successfully logged 
        </div> 
    );
  }
}

export default Logged