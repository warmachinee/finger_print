import React, { Component } from 'react';

const btn = {
  fontSize: '1.5rem',
  padding: '1rem 2rem',
  margin: '1rem',
  cursor: 'pointer'
};
const btnStopHover = {
  fontSize: '1.5rem',
  padding: '1rem 2rem',
  margin: '1rem',
  cursor: 'pointer',
  background: '#ccc'
};
const btnLogout = {
  fontSize: '1.5rem',
  padding: '1rem 2rem',
  margin: '1rem',
  border: 'none',
  background: 'red',
  color: 'white'
};
const titleDiv = {
  margin: '0 1rem',
  display: 'flex',
}
const titleP = {
  fontSize: '1.5rem',
}
const titleValue = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  padding: '0 1.5rem'
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      scanState: false,
      btnStopHover: btn,
      btnLogoutHover: btnLogout,
    }
  }
  scanFinger = () =>{
    this.setState((state)=>{return {scanState: !state.scanState}})
  }
  render() {
    return (
      <div>
        <button style={btn} onClick={this.scanFinger}>Scan</button>
        {(this.state.scanState)?(
          <div>
            <div style={titleDiv}>
              <p style={titleP}>Name : </p>
              <p style={titleValue}>User1</p>
            </div>
            <div style={titleDiv}>
              <p style={titleP}>Time : </p>
              <p style={titleValue}>06:00</p>
            </div>
            <div style={{display: 'flex'}}>
              <button
                style={this.state.btnLogoutHover}
                onMouseEnter={()=>this.setState({btnLogoutHover: btn})}
                onMouseLeave={()=>this.setState({btnLogoutHover: btnLogout})}
                onClick={this.scanFinger}>Logout</button>
              <button
                style={this.state.btnStopHover}
                onMouseEnter={()=>this.setState({btnStopHover: btnStopHover})}
                onMouseLeave={()=>this.setState({btnStopHover: btn})}
                onClick={this.scanFinger}>Stop</button>
            </div>
          </div>
        ):(null)}
      </div>
    );
  }
}

export default App;
