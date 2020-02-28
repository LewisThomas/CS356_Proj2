import React, { Component } from 'react';
//import logo from '../../logo.svg';
//import { Input } from 'reactstrap'
//import {Navbar} from 'reactstrap'
//import '../../App.css';
import './SplashPage.css'
// import { render } from 'react-dom';


class SplashPage extends Component {

  constructor(props) {
    super(props);

    this.switchBool = this.switchBool.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      toggle: false,
      textInput: ""
    };
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
          <button className="signupbutton" onClick={() => this.switchBool()}>{this.state.toggle ? "True" : "False"}</button>
          <button className="signupbutton" onClick={() => this.switchBool()}>{this.state.toggle ? "True" : "False"}</button>
        </div>

        {this.state.textInput}
      </div>
    );
  }
}

export default SplashPage;

