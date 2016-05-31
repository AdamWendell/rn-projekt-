import React, { Component } from 'react';
import { PropTypes, Text, View, Modal } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux'
import MenuButton from './MenuButton'
import { connect } from 'react-redux';
import {toggleDrawer, openDrawer, closeDrawer} from '../actions/drawerAction'




import TabView from './TabView';
import Drawer from 'react-native-drawer';


class MyComponent2 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }

  static renderNavigationBar(props) {
    return (<MenuButton />);
  }

  showModal (visible) {
    this.setState({modalVisible: visible})
  }
  render () {
    return (
      <View>
        <Modal
          visible={this.state.modalVisible}
          onRequestClose={() => this.showModal(false)}
          >
          <Drawer
            ref={(ref) => this.drawer = ref}
            type="displace"
            open={this.props.drawer}
            onOpen={() => this.props.openDrawer()}
            onClose={() => this.props.closeDrawer()}
            content={<TabView />}
            openDrawerOffset={0.80}
            captureGestures={false}
            negotiatePan={true}
          >
            <View><Text onPress={() => this.showModal(false)}>Heeeeeeeeeeeeej</Text></View>
          </Drawer>
          <MenuButton />
        </Modal>
        <Text style={{marginTop: 150}} onPress={() => this.showModal(true)} >
          The current scene
        </Text>

      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({toggleDrawer, openDrawer, closeDrawer}, dispatch)
}
function mapStateToProps ({drawer}) {
  return {drawer}
}


export default connect(mapStateToProps, mapDispatchToProps)(MyComponent2)

