import React from 'react';

const Timer = ({ value, onIncrement, onDecrement }) => {
  return (
    <div>
      <button type="button" onClick={onDecrement}>
        Decrement
      </button>
      <div>{value} minutes</div>
      <button type="button" onClick={onIncrement}>
        Increment
      </button>
    </div>
  );
};

export default Timer;
