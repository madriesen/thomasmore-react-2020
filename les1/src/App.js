import React from 'react';
import './App.css';

import HelloWorld from './components/hello_world';
import Letter from './components/letter';
import Card from './components/color_card';

function App() {
  return (
    <div className="App">
      <Card color="#FFA737" />
      <br />
      <Card color="#FFE312" />


      <HelloWorld greetTarget="Batman" />
      <HelloWorld greetTarget="Bono" />

      <Letter bgcolor="#58B3FF">A</Letter>
      <Letter bgcolor="#FF605F">E</Letter>
      <Letter bgcolor="#FFD52E">I</Letter>
      <Letter bgcolor="#49DD8E">O</Letter>
      <Letter bgcolor="#AE99FF">U</Letter>
    </div>
  );
}

export default App;
