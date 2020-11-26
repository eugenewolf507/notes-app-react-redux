import { connect } from 'react-redux';
import * as timerActions from './timerActions';
import Timer from './Timer';

const mapStateToProps = state => ({
  value: state.value,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(timerActions.increment(10)),
  onDecrement: () => dispatch(timerActions.decrement(10)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
