
import React, { Component } from 'react';
import {
    Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import { Redirect } from 'react-router-dom'
import './BottomSideBarItem.css'


class BottomSideBarItem extends Component {

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
    changeHandler = (event) =>
    {
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
        if (this.state.inputing) {
            return (

                <div style={{ backgroundColor: this.props.buttonColor, margin: "5px", height: "79px", textAlign: "center", paddingTop: "10px", width: '15.4vw', position: 'fixed', bottom: 5 }} >
                    <form height="79px" onSubmit={this.submitHandler}>
                        <input className="inputBox" type="text" height="30px" onChange={this.changeHandler}/>
                    </form>
                </div>
            );

        }
        else {
            return (

                <div style={{ backgroundColor: this.props.buttonColor, margin: "5px", height: "79px", textAlign: "center", paddingTop: "10px", width: '15.4vw', position: 'fixed', bottom: 5 }}
                    onClick={this.setInputing} >
                    <b className="gameChestText" style={{ margin: "auto", fontSize: "3em" }}>{this.props.buttonText}</b>
                </div>
            );
        }

    }
}

export default BottomSideBarItem;