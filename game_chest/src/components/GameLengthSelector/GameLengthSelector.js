
import React, { Component } from 'react';
import './GameLengthSelector.css'
import {
    Media
} from 'reactstrap';
import { Redirect } from 'react-router-dom'
import { Slider } from 'material-ui-slider'
import clockIcon from './assets/clockIcon.svg'

class GameLengthSelector extends Component {

    constructor(props) {
        super(props);

        //this.switchBool = this.switchBool.bind(this);
        // this.onChange = this.onChange.bind(this);
        this.updateTargetMinutes = this.updateTargetMinutes.bind(this);
        this.getSliderMinutes = this.getSliderMinutes.bind(this);
        // let text = this.props.buttonText
        this.state = {
            minutes: 180
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
                <b className="gameChestText" style={{fontSize:"1.7em", marginLeft:"-1.5em", marginTop:"-2em", marginRight:"0.6em"}}>{playerNum}</b> */} </div>) }
    generateMaxPlayersButton = () => {
    }
    // function getBool() {
    //   console.log("got bool", testBoolean)
    //   return testBoolean;
    // }
    //<Input type="text" name="testInput" id="tagID" placeholder="ABCDEF" value={this.state.textInput} onChange={this.onChange} />

    getSliderMinutes = () => {
        return this.state.minutes;
    }

    updateTargetMinutes = (num) => {
        this.setState({
            minutes: num
        })
    }



    render() {
        return (
            <div style={{float:"right", display:"inline"}}>
                <div style={{float: "right" , marginRight:"1em", marginLeft:"1.5em"}}>
                    <b className="gameChestText" style={{fontSize:"3em"}}>Minutes</b>
                </div>
                <div style={{float: "right", width:"3.5vw" }}>
                    <b className="gameChestText" style={{fontSize:"3em"}}> {this.getSliderMinutes()}</b>
                </div>
                <div style={{ float:"right", width:"17vw", marginRight:"2em", marginLeft:"2em", marginTop:"0.6em"}}>
                    <Slider  color="black" min={20} max={180} onChange={this.updateTargetMinutes} onChangeComplete={this.props.minutesUpdated}/>
                    {/* <Slider defaultValue={20} min={0} max={60} marks={true} step={5} /> */}
                </div>
                <div style={{ float: "right" }}>
                    <Media object src={clockIcon} width="67" height="67" style={{ float: "right" }}></Media>
                </div>
            </div>
        );
    }
}

export default GameLengthSelector;
