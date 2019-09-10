import React from 'react';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content">
      <h1>Higher Order Component Demo</h1>
      <p>In React, a Higher Order Component <strong>(HOC)</strong> is essentially a function that takes a component and returns a new component. </p>
      <p>Although it may appear to be four different buttons below, this is actually the same Button component, with four different styles, controlled by applying the relevant props</p> <br />
      </div>
      <div className="demo-buttons">
      <Button />
      <p className="caption">-default</p> 
      <Button darken/>
      <p className="caption">-darken</p> <br />
      <Button lighten />
      <p className="caption">-lighten</p> 
      <Button disabled />
      <p className="caption">-disabled</p>
      </div>
      <div className="content">
      <p> Once imported, the <strong>Button Component</strong> can have it's appearance altered, depending on the chosen prop. </p>
      </div>
    </div>
  );
}

export default App;
