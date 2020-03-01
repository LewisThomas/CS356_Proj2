import React, {Component} from 'react';
// import {BrowserRouter as Router,
//         Switch,
//         Route} from 'react-router-dom'
// import logo from './logo.svg';
import {Navbar} from 'reactstrap'
import SidebarItem from '../../components/SidebarItem/SidebarItem'
// import './App.css';
// import { render } from 'react-dom';



class MainPage extends Component {

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

  tempSidebarButtonNames = ["Dice", "Strategy"]
  getFilterButtons = () => {
    return this.tempSidebarButtonNames.map(function(v, i){
      return <SidebarItem buttonText={v} buttonColor="#6B8CE6"/>
    })
  }

  // function getBool() {
  //   console.log("got bool", testBoolean)
  //   return testBoolean;
  // }
// prim color #4476FF
// secondary color #6B8CE6
// 
  render() {
    return (
          <div style={{height:"100%"}}>
          <Navbar style={{backgroundColor: "#4476FF", margin:"0pt",textAlign: "center"}}>
            <h1 className="gameChestText">Game Chest</h1>
          </Navbar>
          <div style={{width: "100%", display:"table", height:"50.8rem"}}>
            <div style={{display: "table-row"}}>
              <div style={{width:"16vw", display: "table-cell", borderStyle:"solid", borderColor: "#707070", borderWidth: "5px",textAlign: "center"}}>
                <SidebarItem buttonText="Filter By" buttonColor="#4476FF"/>
                <div style={{backgroundColor:"black", height:"6px"}}/>
                {this.getFilterButtons()}
              </div>
              <div style={{display: "table-cell"}}>
                <div style={{backgroundColor:"#6B8CE6", borderColor:"#F5F5F5", borderStyle:"solid", borderWidth:"5px", height:"75px", boxSizing:"border-box"}}>

                </div>
              </div>
            </div>
          </div>
          {/* hello */}
          </div>
    );

    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> Hello world! and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //       <Input type="text" name="testInput" id="tagID" placeholder="ABCDEF" value={this.state.textInput} onChange={this.onChange}> </Input>
    //       <button onClick={() => this.switchBool()}>{this.state.toggle ? "True" : "False"}</button>
    //       {this.state.textInput}
    //     </header>
    //   </div>
    // );
  }
}

export default MainPage;
