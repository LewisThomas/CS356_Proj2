
import React, { Component } from 'react';
import './SidebarItem.css'
import {
    Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import { Redirect } from 'react-router-dom'
const colStyle =
{
    margin: "15pt",
    fontSize: "24pt",

};


class SidebarItem extends Component {

    constructor(props) {

        super(props);
        this.clickHanlder = this.clickHanlder.bind(this);
        //this.switchBool = this.switchBool.bind(this);
        //this.onChange = this.onChange.bind(this);
        // let text = this.props.buttonText
        this.state = {
            redirect: false,
            clicked: true,
            text: this.props.buttonText
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
    clickHanlder = (event) => {
        if (this.state.clicked) {
            this.setState({
                clicked: false
            })
        }
        else {
            this.setState({
                clicked: true
            })
        }
        this.props.onChange(this.state.text, this.state.clicked);
    }

    // function getBool() {
    //   console.log("got bool", testBoolean)
    //   return testBoolean;
    // }
    //<Input type="text" name="testInput" id="tagID" placeholder="ABCDEF" value={this.state.textInput} onChange={this.onChange} />

    render() {
        if (this.state.clicked) {
            return (
                <div style={{backgroundColor: this.props.buttonColor, margin:"5px", height:"79px", textAlign:"center", paddingTop:"10px",
                borderColor: "#DCDCDC", borderStyle: "solid", borderWidth: "5px",}}
                onClick={this.clickHanlder}>
                        <b className="gameChestText" style={{margin:"auto", fontSize:"3em"}}>{this.props.buttonText}</b>
                    </div>
                );

        }
        else {
            return (
                <div style={{ backgroundColor: this.props.buttonColor, margin: "5px", height: "79px", textAlign: "center", paddingTop: "10px",
                borderColor: "#000000", borderStyle: "solid", borderWidth: "5px", }}
                    onClick={this.clickHanlder}>
                    <b className="gameChestText" style={{ margin: "auto", fontSize: "3em" }}>{this.props.buttonText}</b>
                </div>
            );
        }

    }
}

export default SidebarItem;