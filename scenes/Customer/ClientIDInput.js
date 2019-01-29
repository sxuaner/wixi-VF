import React, { Component } from 'react';
import { Test } from '../Customer';
import {TextInput, Button} from "react-native";
import { ClientOutput } from './ClientOutput';

export class ClientIDInput extends Component {
  constructor(props){
    super(props);
    this.state = {clientId : [""], matches : [""]};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // on loading this class, all attributes are empty. therefore the select and graph view should be empty,
  }

  handleChange(event){
    // how to get the value of input on change?
    // console.log(this.state.userInput);

    // assing this.state.userInput to a local var named userInputLocal.
    var userInputLocal =  event.target.value;
    console.log("ClientInput:handleChange() event.target.value is " + event.target.value);

    var matchesLocal = [""];
    
    //The forEach() method executes a provided function once for each array element.
    window.env.NAMEARRAY.forEach( function(entry) {
      // if the entry contains userInput, append it to tmp array.
      // watch out for pointer "this" here
       if( entry.includes(userInputLocal)){
         // matchesLocal[0] == "" from declaration. So only the first element has a meaningful value.
        matchesLocal.push(entry);
      }
    })
    console.log("ClientInput:handleChange() matchesLocal is " + matchesLocal);

    // .setState( { a:b }); 
    this.setState({clientId: matchesLocal});

  }

  // componentDidUpdate(){
  //   this.state.clientId.forEach(  function (e){
  //     console.log(e);
  //   })
  // }

  handleSubmit(event){
    // loop through the NAMEARRAY defined in env.js to search for names that have substring of user inputt
    // set the clientID and then render the page.
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
        <label>
          ClientID:
        <input type = "text" id = "input" onChange = {this.handleChange} />   
        </label>
      
      {/* when Reactjs sees a user-defined component with attributes, it passes the attributes in {key:value, .. }
      object form (props) to the component. props.clientId = this.state.clientId  */}
      <ClientOutput clientId = {this.state.clientId}></ClientOutput>
      {/* <Test clientId={this.state.clientId[0]} authToken={""} sessionId={""}></Test> */}
      </div>
    );
  }
}


