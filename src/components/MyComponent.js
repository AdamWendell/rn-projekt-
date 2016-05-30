import React, { Component } from 'react';
import { PropTypes, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TabView from './TabView';
import { connect } from 'react-redux';

class MyComponent extends React.Component {
  constructor (props) {
    super(props)
  }
  

  render () {
    return (
      <Text style={{marginTop: 150}} onPress={Actions.MyComponent}>
        The current scene is titled {this.props.routes.scene.title}.
      </Text>
    );
  }
}

export default connect(({routes}) => ({routes}))(MyComponent);