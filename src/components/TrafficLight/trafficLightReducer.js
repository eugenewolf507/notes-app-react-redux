import Type from './trafficLightActions';

const trafficLightReducer = (state, action) => {
  switch (action.type) {
    case Type.CHANGE:
      return action.payload;

    default:
      return state;
  }
};

export default trafficLightReducer;
