import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import autobind from 'autobind-decorator';
import {observer} from 'mobx-react/native';
import { Test, ClientIDInput } from '../Customer';
import { colors } from '../../styleguide';
import * as qs from 'query-string';

@autobind
@observer
export class App extends Component {

  render() {
    const build = window.env.GIT_COMMIT || "Unavailable";
    const primaryBlue = colors.primaryBlue;
    const parsed = qs.parse(location.search);
    const clientId = parsed['client_id'] || window.env.CLIENT_ID;
    const authToken = parsed['auth_token'] || window.env.AUTH_TOKEN;
    const sessionId = parsed['session_id'] || window.env.SESSION_ID;
    return (
     
      <View style={styles.wrapper}>
        <div style={{ display: 'none' }}>Build: {build}</div>
        <div id="primaryBlue" style={{ display: 'none' }}>{primaryBlue}</div>
       <ClientIDInput ></ClientIDInput>
       
       {/* <Test clientId={window.env.CLIENT_ID} authToken={authToken} sessionId={sessionId}></Test> */}

      </View>
    );
  };
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    opacity: 0.3
  }
});
