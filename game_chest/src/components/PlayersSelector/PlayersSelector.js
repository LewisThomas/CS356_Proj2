import React, { Component } from 'react';
import './PlayersSelector.css'
import {
    Media
} from 'reactstrap';
import { Redirect } from 'react-router-dom'
import person from './assets/personIcon.svg'

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
                <Media object src={person} width="70" height="70" ></Media>
                <b className="gameChestText" style={{fontSize:"1.7em", marginLeft:"-0.6em", marginTop:"-2em", marginRight:"0.3em"}}>{playerNum}</b>
            </div>
        )
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
            </div>
        );
    }
}

export default PlayersSelector;
