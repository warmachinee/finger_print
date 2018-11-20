import React, { Component } from 'react';

import ic_close from './img/baseline-clear-24px.svg'

const btn = {
  fontSize  : '1.5rem',
  padding   : '1rem 2rem',
  cursor    : 'pointer',
  fontWeight: 'bold',
  width     : '100%'
};
const btnScan = {
  fontSize    : '1.5rem',
  padding     : '1.5rem 2rem',
  cursor      : 'pointer',
  border      : 'none',
  fontWeight  : 'bold',
  margin      : '0 10%',
  background  : '#005100',
  color       : 'white',
  transition  : '.2s',
  width       : '80%'
}
const btnScanHover = {
  fontSize      : '1.5rem',
  padding       : '1.5rem 2rem',
  cursor        : 'pointer',
  fontWeight    : 'bold',
  border        : 'none',
  margin        : '0 10%',
  background    : '#087f23',
  color         : 'white',
  width         : '80%'
}
const btnStop = {
  fontSize      : '1.5rem',
  padding       : '1rem 2rem',
  cursor        : 'pointer',
  fontWeight    : 'bold',
  border        : 'none',
  background    : '#e65100',
  color         : 'white',
  transition    : '.2s',
  width         : '100%'
};
const btnStopHover = {
  fontSize      : '1.5rem',
  padding       : '1rem 2rem',
  cursor        : 'pointer',
  fontWeight    : 'bold',
  border        : 'none',
  background    : '#f9683a',
  color         : 'white',
  width       : '100%'
};
const btnLogout = {
  fontSize      : '1.5rem',
  padding       : '1rem 2rem',
  border        : 'none',
  background    : '#b71c1c',
  color         : 'white',
  fontWeight    : 'bold',
  cursor        : 'pointer',
  transition    : '.2s',
  width         : '100%'
};
const btnLogoutHover = {
  fontSize      : '1.5rem',
  padding       : '1rem 2rem',
  border        : 'none',
  background    : '#d50000',
  color         : 'white',
  fontWeight    : 'bold',
  cursor        : 'pointer',
  width         : '100%'
};
const titleDiv = {
  margin  : '0 1rem',
  display : 'flex',
}
const titleP = {
  fontSize: '1.5rem',
}
const titleValue = {
  fontSize      : '1.5rem',
  fontWeight    : 'bold',
  padding       : '0 1.5rem'
}
const mainTitle = {
  margin      : '5% 10% 2rem 10%',
  fontSize    : '2rem',
  fontWeight  : 'bold',
  textAlign   : 'center'
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      scanState: false,
      modalState: false,
      btnScanHover: btnScan,
      btnStopHover: btnStop,
      btnLogoutHover: btnLogout,
    }
  }
  showModal = () => {
    this.setState({ modalState: true });
  }
  hideModal = () => {
    this.setState({ modalState: false });
  }
  scanFinger = () =>{
    this.setState((state)=>{return {scanState: !state.scanState}})
    //this.showModal()
  }
  stopTimer = () =>{
    console.log("Stop timer");
  }
  logOut = () =>{
    console.log("Log out");
  }
  render() {
    return (
      <div>
        <p style={mainTitle}>Finger Print</p>
        <button
          style={this.state.btnScanHover}
          onMouseEnter={()=>this.setState({btnScanHover: btnScanHover})}
          onMouseLeave={()=>this.setState({btnScanHover: btnScan})}
          onClick={this.scanFinger}>Scan</button>
        {(this.state.scanState)?(
          <div>
            <div style={{border: '1px solid black',margin: '0 10%',padding: '5% 0'}}>
              <div style={titleDiv}>
                <p style={titleP}>Name : </p>
                <p style={titleValue}>User1</p>
              </div>
              <div style={titleDiv}>
                <p style={titleP}>Time : </p>
                <p style={titleValue}>06:00</p>
              </div>
            </div>
            <div style={{display: 'flex',margin: '0 10%'}}>
              <button
                style={this.state.btnLogoutHover}
                onMouseEnter={()=>this.setState({btnLogoutHover: btnLogoutHover})}
                onMouseLeave={()=>this.setState({btnLogoutHover: btnLogout})}
                onClick={this.logOut}>Logout</button>
              <button
                style={this.state.btnStopHover}
                onMouseEnter={()=>this.setState({btnStopHover: btnStopHover})}
                onMouseLeave={()=>this.setState({btnStopHover: btnStop})}
                onClick={this.stopTimer}>Stop</button>
            </div>
          </div>
        ):(null)}
        <Modal title="Test Modal" show={this.state.modalState} handleClose={this.hideModal}>
          <div style={{margin: '2rem 10%'}}>
            <p>Modal</p>
            <p>Data</p>
          </div>
        </Modal>
      </div>
    );
  }
}
const Modal = ({ title,handleClose, show, children }) => {
  const modalEnable = {
    position    : 'fixed',
    top         : '0',
    left        : '0',
    width       : '100%',
    height      : '100%',
    background  : 'rgba(0, 0, 0, 0.6)',
    display     : 'block'
  }
  const modalDisable = {
    position    : 'fixed',
    top         : '0',
    left        : '0',
    width       : '100%',
    height      : '100%',
    background  : 'rgba(0, 0, 0, 0.6)',
    display     : 'none'
  }
  const modalMain = {
    position    : 'fixed',
    background  : 'white',
    width       : '50%',
    height      : 'auto',
    top         : '50%',
    left        : '50%',
    transform   : 'translate(-50%,-50%)',
  }
  const showHideClassName = show ? modalEnable : modalDisable;
  const CloseBtn = () => {
    const closeStyle = {
      cursor      : 'pointer',
      height      : '2rem',
      margin      : '.5rem .5rem 0 0'
    }
    return (
      <div style={{display: 'flex'}}>
        <div style={{flex: '1'}}></div>
        <img style={closeStyle} onClick={handleClose} src={ic_close}></img>
      </div>
    );
  }
  const modalTitle = {
    textAlign     : 'center',
    fontSize      : '1.5rem',
    fontWeight    : '600',
    margin        : '0'
  }
  return (
    <div style={showHideClassName}>
      <div style={modalMain}>
        <CloseBtn />
        <p style={modalTitle}>{title}</p>
        {children}
      </div>
    </div>
  );
};

export default App;
