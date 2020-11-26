import React from 'react';

const TrafficLight = ({ color, onChangeLight }) => {
  return (
    <div>
      <button type="button" onClick={onChangeLight}>
        Change Traffic Light
      </button>
      <div>Color: {color}</div>
      <div>
        <div>red</div>
        <div>yellow</div>
        <div>green</div>
      </div>
    </div>
  );
};

export default TrafficLight;
