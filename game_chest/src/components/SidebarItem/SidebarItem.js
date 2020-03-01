
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

    // function getBool() {
    //   console.log("got bool", testBoolean)
    //   return testBoolean;
    // }
    //<Input type="text" name="testInput" id="tagID" placeholder="ABCDEF" value={this.state.textInput} onChange={this.onChange} />

    render() {
        return (
        <div style={{backgroundColor: this.props.buttonColor, margin:"5px", height:"79px", textAlign:"center", paddingTop:"10px"}}>
                <b className="gameChestText" style={{margin:"auto", fontSize:"3em", paddingTop:"50em"}}>{this.props.buttonText}</b>
            </div>
        );
    }
}

export default SidebarItem;