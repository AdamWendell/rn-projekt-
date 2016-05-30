import { combineReducers } from 'redux';
import routes from './routes';
import drawer from './drawer'
import data from './data'
// ... other reducers

export default combineReducers({
  routes,
  drawer,
  data
  // ... other reducers
});