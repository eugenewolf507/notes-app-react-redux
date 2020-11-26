import { connect } from 'react-redux';
import * as trafficLightActions from './trafficLightActions';
import TrafficLight from './TrafficLight';

const mapStateToProps = state => ({
  color: state.color,
});

const mapDispatchToProps = dispatch => ({
  onChangeLight: () => dispatch(trafficLightActions.light('red')),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrafficLight);
