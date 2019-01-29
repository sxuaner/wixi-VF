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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
      // the target of this event is an "option element", it has only text attribute.
      let selectedHG = document.getElementById("homegraphs").value;
      console.log("ClientOutput: handleSubmit selectedHG: " + selectedHG);
      this.setState({selectedClientId: selectedHG});
      console.log("ClientOutput: handleSubmit selectedCLientID:" + this.state.selectedClientId);
    event.preventDefault();
  }

  // updateSelect function sets the inital state of select list and display the first option( ref 0).
  updateSelect(){
      // when the new clientID is the same as previous one, do nothing.
      this.props.clientId.forEach(element => {
          console.log("ClientOutput.updateSelect() this.props.clientId:" + element);
      });
      if(this.state.clientId !== this.props.clientId){
          this.setState({clientId:this.props.clientId, selectedClientId: this.props.clientId[1]});
      }
  }


  render() {
    return (
      <div className = "clientOutput">
        <label>Homegraph(s) available:
            {/* The multiple attribute is a boolean attribute of tag select.
            When present, it specifies that multiple options can be selected at once. */}
            <select form="display"  id= "homegraphs" onChange={this.handleChange}>

            {/* The map() method creates a new array with the results of calling a provided function on every 
            element in the calling array. */}
            {this.state.clientId.map( function(entry){
                if(entry !== ""){
                    return <option>{entry}</option>
                            }
                })}
        </select>

        <button onClick = {this.updateSelect.bind(this)}>Update List</button>      
        </label>

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
