import React from 'react';
import {PropTypes} from "react";
import {StyleSheet, Text, View} from "react-native";
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons'

const contextTypes = {
  drawer: React.PropTypes.object,
};

const propTypes = {
  name: PropTypes.string,
  sceneStyle: View.propTypes.style,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const TabView = (props, context) => {
  const drawer = context.drawer;
  return (
    <View style={[styles.container, props.sceneStyle ]}>

      <Text><Icon name="hot-tub" size={55} color="#4F8EF7" onPress={() => { Actions.MyComponent(); }}/></Text>
      <Text><Icon name="free-breakfast" size={55} color="pink" onPress={() => { Actions.MyComponent(); }}/></Text>
    <Text><Icon name="cake" size={55} color="#4F8EF7" onPress={() => { Actions.ApiList(); }}/></Text>
  <Text><Icon name="accessible" size={55} color="#4F8EF7" onPress={() => { Actions.ApiList(); }}/></Text>
  <Text><Icon name="accessible" size={55} color="#4F8EF7" onPress={() => { Actions.ApiList(); }}/></Text>
  <Text><Icon name="accessible" size={55} color="#4F8EF7" onPress={() => { Actions.ApiList(); }}/></Text>
  <Text><Icon name="accessible" size={55} color="#4F8EF7" onPress={() => { Actions.ApiList(); }}/></Text>
  <Text><Icon name="accessible" size={55} color="#4F8EF7" onPress={() => { Actions.ApiList(); }}/></Text>
  <Text><Icon name="accessible" size={55} color="#4F8EF7" onPress={() => { Actions.ApiList(); }}/></Text>
  <Text><Icon name="accessible" size={55} color="#4F8EF7" onPress={() => { Actions.ApiList(); }}/></Text>
    </View>
  );
};

TabView.contextTypes = contextTypes;
TabView.propTypes = propTypes;

export default TabView;