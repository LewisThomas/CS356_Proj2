import React, { Component } from 'react';
//import logo from '../../logo.svg';
//import { Input } from 'reactstrap'
//import {Navbar} from 'reactstrap'
//import '../../App.css';
import './SplashPage.css'
import { Redirect } from 'react-router-dom'
// import { render } from 'react-dom';


class SplashPage extends Component {

  constructor(props) {
    super(props);

    this.switchBool = this.switchBool.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      toggle: false,
      textInput: "",
      redirectSign: false,
      redirectLog: false
    };
    
  }
  setRedirectSign = () => {
    this.setState({
      redirectSign: true
    })
  }
  setRedirectLog = () => {
    this.setState({
      redirectLog: true
    })
  }
  renderRedirectSign = () => {
    if (this.state.redirectSign) {
      console.log("test");
      return <Redirect to='/signup' />
    }
  }
  renderRedirectLog = () => {
    if (this.state.redirectLog) {
      return <Redirect to='/login' />
    }
  }
  switchBool = () => {
    this.setState({
      toggle: !this.state.toggle
    })
    console.log("switched", this.state.toggle)

  }
  onChange = (event) => {
    //console.log(event)
    this.setState({
      textInput: event.target.value
    })
  }

  // function getBool() {
  //   console.log("got bool", testBoolean)
  //   return testBoolean;
  // }
  //<Input type="text" name="testInput" id="tagID" placeholder="ABCDEF" value={this.state.textInput} onChange={this.onChange} />

  render() {
    return (
      <div className="App">
        <div className="topbar">
          <h1 style={{ color: "#FFFFFF", WebkitTextStroke: "0.04em black", fontSize: "64pt", margin: "0pt" }}>Game Chest</h1>
        </div>
        <div className="mainspace">
          <h3 style={{ color: "#FFFFFF", WebkitTextStroke: "0.04em black", fontSize: "52pt", margin: "0pt", padding: "25px" }}>All Of Your Games</h3>
          <h3 style={{ color: "#FFFFFF", WebkitTextStroke: "0.04em black", fontSize: "52pt", margin: "0pt" }}>Sorted For Your Convience</h3>
          <div>
            {this.renderRedirectSign()}
            <button className="signupbutton" onClick={this.setRedirectSign}>{}SignUp</button>
          </div>
          <div>
            {this.renderRedirectLog()}
            <button className="loginbutton" onClick={this.setRedirectLog}>{}Login</button>
          </div>

        </div>

        {this.state.textInput}
      </div>
    );
  }
}

export default SplashPage;

