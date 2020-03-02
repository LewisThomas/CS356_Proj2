import React, { Component } from 'react';
import './PlayersSelector.css'
import {
    Media
} from 'reactstrap';
import { Redirect } from 'react-router-dom'
import person from './assets/personIcon.png'
import fadedPerson from './assets/personIconFaded.png'
import personGroup from './assets/groupOfPeople.png'
import fadedPersonGroup from './assets/groupOfPeople2.png'

class PlayersSelector extends Component {

    constructor(props) {
        super(props);

        //this.switchBool = this.switchBool.bind(this);
        //this.onChange = this.onChange.bind(this);
        this.getChangePlayersSelectedFunc = this.getChangePlayersSelectedFunc.bind(this);
        // let text = this.props.buttonText
        this.state = {
            redirect: false,
            playersSelected: 4
        };
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/main' />
        }
    }
    getChangePlayersSelectedFunc = (num) => {
        let func = () => {
            console.log("clicked")
            this.setState({
                playersSelected: num
            })
            this.props.updatePlayers(num)
        }
        return func
    }
    // changePlayersSelected = (num) => {
    //     this.setState({
    //         playersSelected: num
    //     })
    // }
    
    generatePlayerButton = (playerNum) => {
        let img = playerNum <= this.state.playersSelected ? person : fadedPerson;
        return (
            <div style={{float:"left"}} onClick={this.getChangePlayersSelectedFunc(playerNum)}>
                <Media object src={img} width="67" height="67" ></Media>
                <b className="gameChestText" style={{fontSize:"1.7em", marginLeft:"-1.5em", marginTop:"-2em", marginRight:"0.6em"}}>{playerNum}</b>
            </div>
        )
    }
    generateMaxPlayersButton = (maxPlayersSelected) => {
        let img = maxPlayersSelected ? personGroup : fadedPersonGroup;
        return (
            <div onClick={this.getChangePlayersSelectedFunc(6)} style={{float:"left", height:"59px", width:"125px", marginTop:"0.15em", backgroundSize:"contain",backgroundImage: "url(" + img + ")"}}>
                {/* <Media object src={personGroup} width="125" height="56" style={{paddingTop:"0.24em"}}></Media> */}
                {/* <div style={{float:"right", height:"74px", width:"1px",zIndex:"100"}}> */}
                    {/* <b className="gameChestText" style={{ fontSize: "1.7em", position:"fixed", bottom:"75.5vh", left:"41.8vw"}}>6+</b> */}
                    <b className="gameChestText" style={{ fontSize: "1.7em", position:"relative", left:"0.8em", top:"1.3em"}}>6+</b>
                {/* </div> */}
            </div>
        );
    }
    // function getBool() {
    //   console.log("got bool", testBoolean)
    //   return testBoolean;
    // }
    //<Input type="text" name="testInput" id="tagID" placeholder="ABCDEF" value={this.state.textInput} onChange={this.onChange} />

    render() {
        return (
            <div>
                {/* <img src="./" height="50" width="50"></img> */}
                {this.generatePlayerButton(1)}
                {this.generatePlayerButton(2)}
                {this.generatePlayerButton(3)}
                {this.generatePlayerButton(4)}
                {this.generatePlayerButton(5)}
                {this.generateMaxPlayersButton(this.state.playersSelected >= 6)}
            </div>
        );
    }
}

export default PlayersSelector;
