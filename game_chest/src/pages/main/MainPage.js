import React, { Component } from 'react';
// import {BrowserRouter as Router,
//         Switch,
//         Route} from 'react-router-dom'
// import logo from './logo.svg';
import { Navbar, Media } from 'reactstrap'
import SidebarItem from '../../components/SidebarItem/SidebarItem'
import BottomSidebarItem from '../../components/BottomSideBarItem/BottomSideBarItem'
import person from './assets/personIcon.svg'
import PlayerSelector from '../../components/PlayersSelector/PlayersSelector'
import clockIcon from './assets/clockIcon.svg'
import GameLengthSelector from '../../components/GameLengthSelector/GameLengthSelector';
import './MainPage.css'
import Game from './Game'
import GameCard from '../../components/GameCard/GameCard';
import chessImage from './assets/king.png'
import rookImage from './assets/rook.jpg'
import monopoly from './assets/monopoly.jpg'
import talisman from './assets/talisman.jpeg'
import bunnies from './assets/Bunnies.jpg'
import phase from './assets/phase10.jpg'
import uno from './assets/Uno.png'
import yahtzee from './assets/yahtzee.jpeg'
import catan from './assets/Catan.jpg'
import dice from './assets/Dice.jpg'
import nevermore from './assets/nevermore.jpg'
import addGameButton from './assets/addGameButton.png'
// import './App.css';
// import { render } from 'react-dom';



class MainPage extends Component {

  constructor(props) {
    super(props);
    this.getFilterButtons = this.getFilterButtons.bind(this);
    this.switchBool = this.switchBool.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onTagClicked = this.onTagClicked.bind(this);
    this.makeSideBarItemFromName = this.makeSideBarItemFromName.bind(this);
    this.updateMinutes = this.updateMinutes.bind(this);
    this.updatePlayersSelected = this.updatePlayersSelected.bind(this);
    this.filterGames = this.filterGames.bind(this);
    this.allGames = [new Game("Monopoly", 2, 6, 180, ["Dice", "Party"], monopoly),
      new Game("Talisman", 2, 6, 180, ["Dice", "Difficult", "Cards"], talisman),
      new Game("Killer Bunnies", 3, 6, 90, ["Cards", "Party"], bunnies),
      new Game("Phase 10", 2, 6, 90, ["Cards", "Party"], phase),
      new Game("Uno", 2, 6, 10, ["Card", "Party"], uno),
      new Game("Yahtzee", 2, 6, 30, ["Dice", "Party"], yahtzee),
      new Game("Settlers of Catan", 3, 4, 90, ["Dice"], catan),
      new Game("Nevermore", 2, 6, 45, ["Cards", "Difficult"], nevermore),
      new Game("Dice Fordge", 2, 4, 45, ["Dice", "difficult"], dice)];
    this.state = {
      toggle: false,
      textInput: "",
      newTagName: "",
      sideBarNames: ["dice", "cards", "party"],
      selectedTags: [],
      minutes: 180, // default value, magic number
      playersSelected: 4 // default value, magic number
    };
  }

  switchBool = () => {
    this.setState({
      toggle: !this.state.toggle
    })
    console.log("switched", this.state.toggle)

  }
  onTextSubmit = (value) => {
    var temp = this.state.sideBarNames;
    temp.push(value);
    console.log(value);
    this.setState({
      sideBarNames: temp
    })
  }

  onTagClicked = (value, bool) => {
    if (bool) {
      var temp = this.state.selectedTags
      temp.push(value);
      this.setState({
        selectedTags: temp
      })
    }
    else {
      var temp = this.state.selectedTags
      for (var i = 0; i < temp.length; i++) {
        if (temp[i] === value) {
          temp.splice(i, 1); i--;
        }
      }
      this.setState({
        selectedTags: temp
      })

    }
  }

  onTextChange = (event) => {
    this.setState({ newTagText: event.target.value });
  }

  onChange = (event) => {
    console.log(event)
    this.setState({
      textInput: event.target.value
    })
  }
  filterGames = (game) =>
  { 
    var passed = true;
    if(this.state.selectedTags.length > 0)
    {
      
      var i = 0;
      for(i = 0; i<this.state.selectedTags.length; i++)
      {
        var g = 0;
        var hasMatchingTag = false;
        for(g = 0; g < game.tags.length; g++)
        {
          if(game.tags[g] === this.state.selectedTags[i])
          {
            hasMatchingTag = true;
            break;
          }
        }
        passed = passed && hasMatchingTag;


      }
    }
    passed = passed && (game.minPlayers <= this.state.playersSelected && game.maxPlayers >= this.state.playersSelected);
    passed = passed && (game.time <= this.state.minutes);
    return passed;
  }
  getFilteredGameCards = () => {
    //console.log(this.allGames)
    var filteredGames = this.allGames;
    filteredGames = filteredGames.filter(this.filterGames);
    return filteredGames.map(function (v, i) {
      return <GameCard gameName={v.name} gameImage={v.image} />
    })
  }

  makeSideBarItemFromName = (v) => {
    var temp = v;
    temp = temp.charAt(0).toUpperCase() + temp.slice(1);
    return <SidebarItem buttonText={temp} buttonColor="#6B8CE6" onChange={this.onTagClicked} />
  }

  getFilterButtons = () => {
    var temp = this.onTagClicked;
    return this.state.sideBarNames.map(this.makeSideBarItemFromName);
  }

  updateMinutes = (num) => {
    this.setState({
      minutes: num
    })
  }

  updatePlayersSelected = (num) => {
    this.setState({
      playersSelected: num
    })
  }

  // componentDidUpdate = () => {
  //   console.log("main page updated, its state is now")
  //   console.log(this.state)
  // }

  // function getBool() {
  //   console.log("got bool", testBoolean)
  //   return testBoolean;
  // }
  // prim color #4476FF
  // secondary color #6B8CE6
  // 

  redirect = () => {
    window.location = "/"
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        
        <Media object style={{position:"absolute", right:"2em", "bottom":"2em"}} src={addGameButton} width="72" height="86.4"></Media>
        <Navbar style={{ backgroundColor: "#4476FF", margin: "0pt", textAlign: "center" }}>
          <h1 style={{}} className="gameChestText">Game Chest</h1>

        </Navbar>
          <button style={{position:"absolute", right:"1em", top:"0.8em", background:"#6B8CE6"}} className="logbutton" onClick={this.redirect}>
            <b className="gameChestText" style={{fontSize:"1em"}}>Log Out</b></button>
        <div style={{ width: "100%", display: "table", height: "50.8rem" }}>
          <div style={{ display: "" }}>
            <div style={{ width: "16vw", float: "left", borderStyle: "solid", borderColor: "#707070", borderWidth: "5px", textAlign: "center", height: "2000px" }}>
              <SidebarItem buttonText="Filter By" buttonColor="#4476FF" />
              <div style={{ backgroundColor: "black", height: "6px" }} />
              {this.getFilterButtons()}
              <BottomSidebarItem buttonText="Add Tag" buttonColor="#4476FF" value={this.state.newTagName} onChange={this.onTextSubmit}>
              </BottomSidebarItem>
            </div>
            <div style={{ display: "block" }}>
              <div style={{ backgroundColor: "#6B8CE6", marginLeft: "16.5vw", borderColor: "#F5F5F5", borderStyle: "solid", borderWidth: "5px", height: "85px", boxSizing: "border-box" }}>
                <b className="gameChestText" style={{ float: "left", fontSize: "35pt", marginLeft: "0.2em" }}>Players</b>
                <PlayerSelector updatePlayers={this.updatePlayersSelected} />
                <div style={{ float: "right" }}>
                  <GameLengthSelector minutesUpdated={this.updateMinutes} />
                  {/* <Media object src={clockIcon} width="67" height="67" ></Media> */}
                </div>
              </div>
            </div>
            <div className="grid-container">
              {this.getFilteredGameCards()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
