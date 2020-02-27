import React, {setState, Component} from 'react';
import logo from './logo.svg';
import {Input} from 'reactstrap'
import './App.css';
import { render } from 'react-dom';



class App extends Component {

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
    console.log(event)
    this.setState({
      textInput: event.target.value 
    })
  }

  // function getBool() {
  //   console.log("got bool", testBoolean)
  //   return testBoolean;
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> Hello world! and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Input type="text" name="testInput" id="tagID" placeholder="ABCDEF" value={this.state.textInput} onChange={this.onChange}> </Input>
          <button onClick={() => this.switchBool()}>{this.state.toggle ? "True" : "False"}</button>
          {this.state.textInput}
        </header>
      </div>
    );
  }
}

export default App;
