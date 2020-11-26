import React from 'react';
import './App.css';
import Timer from './components/Timer/TimerContainer';
import NoteEditor from './components/NoteEditor/NoteEditorContainer';
import TrafficLight from './components/TrafficLight/TrafficLightContainer';

const App = () => (
  <div className="App">
    <h1>Notes App</h1>
    <Timer />
    {/* <NoteEditor /> */}
    <h2>Treaffic Lights</h2>
    <TrafficLight />
  </div>
);

export default App;
