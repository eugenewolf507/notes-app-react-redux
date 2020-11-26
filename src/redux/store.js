import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import timerReducer from '../components/Timer/timerReducer';
import trafficLightReducer from '../components/TrafficLight/trafficLightReducer';

const rootReducer = combineReducers({
  value: timerReducer,
  color: trafficLightReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());
export default store;
