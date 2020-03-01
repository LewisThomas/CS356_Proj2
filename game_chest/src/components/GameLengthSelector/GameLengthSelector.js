
import React, { Component } from 'react';
import './GameLengthSelector.css'
import {
    Media
} from 'reactstrap';
import { Redirect } from 'react-router-dom'
// import { Slider } from 'material-ui-slider'
import clockIcon from './assets/clockIcon.svg'

class GameLengthSelector extends Component {

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
                {/* <Media object src={person} width="67" height="67" ></Media>
                <b className="gameChestText" style={{fontSize:"1.7em", marginLeft:"-1.5em", marginTop:"-2em", marginRight:"0.6em"}}>{playerNum}</b> */}
            </div>
        )
    }
    generateMaxPlayersButton = () => {
    }
    // function getBool() {
    //   console.log("got bool", testBoolean)
    //   return testBoolean;
    // }
    //<Input type="text" name="testInput" id="tagID" placeholder="ABCDEF" value={this.state.textInput} onChange={this.onChange} />

    render() {
        return (
            <div>
                <Media object src={clockIcon} width="67" height="67" ></Media>
                {/* <Slider />  */}
            </div>
        );
    }
}

export default GameLengthSelector;
