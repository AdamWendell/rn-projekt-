import React, { Component } from 'react';
import {Text } from 'react-native'
import { Router, Scene, NavBar } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';
import MyComponent from './MyComponent'
import MyComponent2 from './MyComponent2'
import ApiList from './ApiList'
import NavDrawer from './NavDrawer'
import { persistStore, autoRehydrate } from 'redux-persist'
var { AsyncStorage } = require('react-native')

const RouterWithRedux = connect()(Router);
import reducers from '../reducers';
// other imports...

// create store...
const store = compose(autoRehydrate())(createStore)(reducers)

persistStore(store, {whitelist: ['data'], storage: AsyncStorage})


class App extends React.Component {
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
    console.log(store.getState());
    return (
      <Provider store={store}>
        <RouterWithRedux>
            <Scene key='drawer' component={NavDrawer} >

              <Scene key="MyComponent" component={MyComponent2}  initial={true} title="MyComponent" hideNavBar={false}/>
              <Scene key="ApiList" component={ApiList} title="Heej"/>

            </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default App;