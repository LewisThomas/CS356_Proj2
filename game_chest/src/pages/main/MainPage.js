import React, {Component} from 'react';
// import {BrowserRouter as Router,
//         Switch,
//         Route} from 'react-router-dom'
// import logo from './logo.svg';
import {Navbar, Media} from 'reactstrap'
import SidebarItem from '../../components/SidebarItem/SidebarItem'
import person from './assets/personIcon.svg'
import PlayerSelector from '../../components/PlayersSelector/PlayersSelector'
import clockIcon from './assets/clockIcon.svg'
import GameLengthSelector from '../../components/GameLengthSelector/GameLengthSelector';
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
            <div style={{display: ""}}>
              <div style={{width:"16vw", float:"left", borderStyle:"solid", borderColor: "#707070", borderWidth: "5px",textAlign: "center"}}>
                <SidebarItem buttonText="Filter By" buttonColor="#4476FF"/>
                <div style={{backgroundColor:"black", height:"6px"}}/>
                {this.getFilterButtons()}
              </div>
              <div style={{display: "block"}}>
                <div style={{backgroundColor:"#6B8CE6", marginLeft:"16.5vw", borderColor:"#F5F5F5", borderStyle:"solid", borderWidth:"5px", height:"85px", boxSizing:"border-box"}}>
                   <b className="gameChestText" style={{float:"left", fontSize:"35pt", marginLeft:"0.2em"}}>Players</b>
                   <PlayerSelector/>
                   <div style={{float:"right"}}>
                      <GameLengthSelector />
                      {/* <Media object src={clockIcon} width="67" height="67" ></Media> */}
                   </div>
                </div>
              </div>
            </div>
          </div>
          {/* hello */}
          </div>
    );
  }
}

export default MainPage;
