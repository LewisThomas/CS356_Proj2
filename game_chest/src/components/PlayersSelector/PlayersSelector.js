import React, { Component } from 'react';
import './PlayersSelector.css'
import {
    Media
} from 'reactstrap';
import { Redirect } from 'react-router-dom'
import person from './assets/personIcon.svg'
import personGroup from './assets/groupOfPeople.png'

class PlayersSelector extends Component {

    constructor(props) {
        super(props);

        //this.switchBool = this.switchBool.bind(this);
        //this.onChange = this.onChange.bind(this);
        // let text = this.props.buttonText
        this.state = {
            redirect: false
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
    
    generatePlayerButton = (playerNum) => {
        return (
            <div style={{float:"left"}}>
                <Media object src={person} width="67" height="67" ></Media>
                <b className="gameChestText" style={{fontSize:"1.7em", marginLeft:"-1.5em", marginTop:"-2em", marginRight:"0.6em"}}>{playerNum}</b>
            </div>
        )
    }
    generateMaxPlayersButton = () => {
        return (
            <div style={{float:"left", height:"59px", width:"125px", marginTop:"0.15em", backgroundSize:"contain",backgroundImage: "url(" + personGroup + ")"}}>
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
                {this.generateMaxPlayersButton()}
            </div>
        );
    }
}

export default PlayersSelector;
