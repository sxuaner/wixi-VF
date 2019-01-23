import React, { Component } from 'react';
import { Test } from '../Customer';
import {TextInput, Button} from "react-native";

export class ClientIDInput extends Component {
  constructor(props){
    super(props);
    this.state = {clientId : "", tmp : ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.state.tmp =  event.target.value;
    console.log(this.state.tmp);
  }

  handleSubmit(event){
    this.setState({clientId: this.state.tmp});
    event.preventDefault();
  }

  // handleChange(event){
  //   this.setState({clientId : event.target.value});
  //   console.log(this.state.clientId);
  // }

  // handleSubmit(event){
  //   event.preventDefault();
  // }

  render() {
    return (
      <div className = "clientInput">

      <form onSubmit = {this.handleSubmit}>   

        <label>
          ClientID:
        <input type = "text" onChange = {this.handleChange} />   
        </label>

        <input type = "submit" value = "Show" />
      </form>

      <Test clientId={this.state.clientId} authToken={""} sessionId={""}></Test>
      </div>
    );
  }
}


