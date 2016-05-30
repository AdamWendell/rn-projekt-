import React, { Component } from 'react';
import { PropTypes, Text, NetInfo, ListView, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {dataAction} from '../actions/dataAction'
import MenuButton from './MenuButton'

class ApiList extends React.Component {
  constructor (props) {
    super(props)
  }
  static renderNavigationBar(props) {
    return (<MenuButton />);
  }

  renderRow(data) {
  return (
    <View>
      <Text> Mjaaaaaoo </Text>
      <Text> Mjaaaaaoo </Text>
      <Text> Mjaaaaaoo </Text>
      <Text> Mjaaaaaoo </Text>
      <Text> Mjaaaaaoo </Text>
      <Text> Mjaaaaaoo </Text>
      <Text> Mjaaaaaoo </Text>
      <Text> Mjaaaaaoo </Text>
      <Text> Mjaaaaaoo </Text>
      <Text> Mjaaaaaoo </Text>
      <Text> Mjaaaaaoo </Text>
      <Text>{data.body}</Text>
    </View>
  );
}
  componentDidMount () {
    (async() => {
      try {
        var response = await fetch('http://jsonplaceholder.typicode.com/posts?userId=1');
        var data = await response.json();
        this.props.dataAction(data)
      } catch (e) {
      }
    })();

  }

  render () {
    if (this.props.data.data === null) {
      return <Text>LOADING </Text>
    }
    return (
      <ListView
        dataSource={this.props.dataSource}
        renderRow={(rowData, sectionID, rowID, highlightRow) => this.renderRow(rowData)}
      />
    );
  }
}
const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({dataAction}, dispatch)
}
function mapStateToProps ({data}) {
  console.log(data);
  return {
    data,
    dataSource: data.data === null ? null: dataSource.cloneWithRows(data.data)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiList)
