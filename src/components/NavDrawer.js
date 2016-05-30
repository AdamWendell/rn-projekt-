import React, { PropTypes } from 'react';
import {View, Text} from 'react-native'
import Drawer from 'react-native-drawer';
import { connect } from 'react-redux';
import {openDrawer, closeDrawer} from '../actions/drawerAction'
import { bindActionCreators } from 'redux'

import { DefaultRenderer } from 'react-native-router-flux';
import TabView from './TabView';

const propTypes = {
  navigationState: PropTypes.object,
};

class NavigationDrawer extends React.Component {
//   static renderNavigationBar(props) {
//     return (<MenuButton {...props} />);
// }
  render() {
    const children = this.props.navigationState.children;
    return (
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
        <DefaultRenderer navigationState={children[children.length-1]} onNavigate={this.props.onNavigate} />
      </Drawer>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({openDrawer, closeDrawer}, dispatch)
}
function mapStateToProps ({drawer}) {
  return {drawer}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawer)