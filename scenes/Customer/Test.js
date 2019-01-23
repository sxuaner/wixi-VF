import React, { Component, PropTypes } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import moment from 'moment';
import _ from 'lodash';
import { col, colors, DarkBody, Issue, row, SmallHeader, SidebarNavItem } from '../../styleguide';
import { DebugView } from '../../components';
import { BigStat, SmallStat, TestDetailsContainer, NetworkDiagnosis, NetworkQuality, BroadbandInformation, Device, NetworkGraph } from './';
import autobind from 'autobind-decorator';

const UNABLE_TO_RETRIEVE = {"$schema": "http://json-schema.org/schema#", "description": "Meta-schema for self-describing the Catalina Labs Wixi HomeGraph JSON schema", "self": {"vendor": "io.catalinalabs.self-desc", "name": "schema", "format": "jsonschema", "version": "1.3.2"}, "wixi": {"clientId": null, "sessionId": null, "partnerId": null, "partnerAppId": null, "sdkVersion": null, "createdAt": null, "clientIp": null, "clientMake": null, "clientModel": null, "clientOS": null, "clientOSVersion": null, "clientSSId": null, "venueId": null}, "devices": [], "services": [], "capabilities": [], "tips": [], "network": {}, "dnsInfo": {}, "ispInfo": {}, "broadbandParameters": {}, "accessPoints": []};

@autobind
export class Test extends Component {

  constructor(props){
    super(props);
    this.state = {
      homegraph: UNABLE_TO_RETRIEVE,
    };
    this.retrieve();
  }

  retrieve() {
    const testComponent = this;
    // fetch(process.env.API_BASE + 'homegraphs?session_id=' + this.props.sessionId, {

    if(this.state.homegraph.wixi.clientId != this.props.clientId){
    fetch('./' + this.props.clientId + ".json",{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-WXClientId': this.props.clientId,
        'X-WXAuthToken': this.props.authToken,
      },
    }).then(function(response) {
      response.json().then(function(payload) {
        // console.log(payload);
        testComponent.setState({homegraph: payload});
      });
    }).catch(function(error) {
      console.log('error while retrieving homegraph');
      console.log(error);
    })
  }
}


  componentDidMount(){
    window.scrollTo(0,0);
  };

  render() {
    this.retrieve();
    return (
      <View style={styles.wrapper}>
        <View style={[styles.col, { width: col(11.5) }]}>
          <NetworkDiagnosis homegraph={this.state.homegraph} />
          <NetworkGraph homegraph={this.state.homegraph} />
          <NetworkQuality homegraph={this.state.homegraph} />
          <BroadbandInformation homegraph={this.state.homegraph} />
        </View>
      </View>
    );
  };
};

let styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingLeft: col(0.5),
    paddingRight: col(0.5),
    flexDirection: 'row'
  }
});
