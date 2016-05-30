import React from 'react'
import { Text, View, Dimensions, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux';
import {toggleDrawer} from '../actions/drawerAction'
import { bindActionCreators } from 'redux'

const width = Dimensions.get('window').width * 0.2

// {this.props.drawer ? 'True' : 'False' }
class MenuButton extends React.Component {

  render () {
    console.log(this.props);
    return <View style={{position: 'absolute', bottom: 0, width: width, alignItems: 'center'}}>
            <Icon name='menu' size={55} onPress={() => {this.props.toggleDrawer(); }} />
          <Text style={{fontSize: 20, }} >
            {this.props.drawer ? 'Close' : 'Open' }
          </Text>
    </View>
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({toggleDrawer}, dispatch)
}
function mapStateToProps ({drawer}) {
  return {drawer}
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton)