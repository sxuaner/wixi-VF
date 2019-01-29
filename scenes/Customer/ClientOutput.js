import React, { Component } from 'react';
import { Test } from '../Customer';
import {TextInput, Button} from "react-native";

export class ClientOutput extends Component {
  constructor(props){
    super(props);
    // update clientId and tmp to string array.
    // ?? redundant? clientId: this.props.clientId?  nope, this is necessary.
    this.state = {
        clientId : this.props.clientId, 
        selectedClientId: ""
    };
    console.log("Program reaches ClientOutput's constructor.")

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
      // the target of this event is an "option element", it has only text attribute.
      var selectedHG = document.getElementById("homegraphs").value;
      console.log("ClientOutput: handleSubmit selectedHG: " + selectedHG);
      this.setState({selectedClientId: selectedHG});
      console.log("ClientOutput: handleSubmit selectedCLientID:" + this.state.selectedClientId);
    event.preventDefault();
  }

  updateSelect(){
      if(this.state.clientId !== this.props.clientId){
          this.setState({clientId:this.props.clientId});
      }
  }

 

  render() {
    return (
      <div className = "clientOutput">
      <form id="display" >
        <label>Result(s):</label>
            {/* The multiple attribute is a boolean attribute.
            When present, it specifies that multiple options can be selected at once. */}
            <select form="display"  id= "homegraphs" onChange={this.handleSubmit}>
             {/* The map() method creates a new array with the results of calling a provided function on every 
            element in the calling array. */}
            {this.state.clientId.map( function(entry){
                if(entry !== ""){
                    return <option>{entry}</option>
                            }
                })}
        </select>
        <input type="submit"></input>
      </form>
      <button onClick = {this.updateSelect.bind(this)}>Update List</button>

      <Test clientId={this.state.selectedClientId} authToken={""} sessionId={""}></Test>
      </div>
    );
  }
}

 // handleChange(event){
  //   this.setState({clientId : event.target.value});
  //   console.log(this.state.clientId);
  // }

  // handleSubmit(event){
  //   event.preventDefault();
  // }
