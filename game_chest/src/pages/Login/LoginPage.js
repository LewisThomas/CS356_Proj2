import React, { Component } from 'react';
import './LoginPage.css'
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


class LoginPage extends Component {

    constructor(props) {
        super(props);

        //this.switchBool = this.switchBool.bind(this);
        //this.onChange = this.onChange.bind(this);

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
            <div className="App">
                <div className="topbar">
                    <h1 style={{ color: "#FFFFFF", WebkitTextStroke: "0.04em black", fontSize: "64pt", margin: "0pt" }}>Game Chest</h1>
                </div>
                <div className="background">

                    <Form className="form">
                        <h2 style={{ margin: "0pt", padding: "20pt" }}>Sign In</h2>
                        <Col style={colStyle}>
                            <FormGroup>
                                <Label>User Name</Label>
                                <Input
                                    type="username"
                                    name="User Name"
                                    id="exampleUsername"
                                    placeholder="usernumberone"
                                />
                            </FormGroup>
                        </Col>
                        <Col style={colStyle}>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    placeholder="********"
                                />
                            </FormGroup>
                        </Col>
                        {this.renderRedirect()}
                        <Button onClick={this.setRedirect}>Submit</Button>
                        <Button>Cancel</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default LoginPage;