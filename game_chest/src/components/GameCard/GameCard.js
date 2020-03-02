
import React, { Component } from 'react';
import {
    Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import { Redirect } from 'react-router-dom'
import './GameCard.css'
//import chessImage from './king.png'


class GameCard extends Component {

    constructor(props) {
        super(props);

        //this.switchBool = this.switchBool.bind(this);
        //this.onChange = this.onChange.bind(this);
        // let text = this.props.buttonText
        this.state = {
            inputing: false,
            newTagText: "derp"
        };
    }
    setInputing = () => {
        this.setState({
            inputing: !this.state.inputing
        })
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
    submitHandler = (event) => {
        this.setState({
            newTagText: ""
        })
        this.setInputing();
        event.preventDefault();
        this.props.onChange(this.state.newTagText);
    }
    changeHandler = (event) => {
        this.setState({
            newTagText: event.target.value
        })
    }

    // function getBool() {
    //   console.log("got bool", testBoolean)
    //   return testBoolean;
    // }
    //<Input type="text" name="testInput" id="tagID" placeholder="ABCDEF" value={this.state.textInput} onChange={this.onChange} />

    render() {
        return (
            <div className="card">
                <table align="center">
                    <img ref="image" src={this.props.gameImage} height="200px" width = "200px"></img>
                    <tr>
                        <div className="container">
                            <h4><b>{this.props.gameName}</b></h4>
                        </div>
                    </tr>

                </table>

            </div>
        );

    }
}

export default GameCard;