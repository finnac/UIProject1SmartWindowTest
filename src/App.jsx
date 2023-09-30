
import React, { useState } from 'react';
import ButtonOptions from './components/ButtonOptions'


function App() {
  return (
    <div>
      <ButtonOptions 
        title="Window Opening" 
        windowLabelText="% your window is open:" // Customizable label
      />
      <ButtonOptions 
        title="Bug Screen" 
        windowLabelText="% your bug screen is on:" // Customizable label
      />
      <ButtonOptions 
        title="Tint" 
        windowLabelText="% your window is tinted:" // Customizable label
      />
       <ButtonOptions 
        title="Privacy Blur" 
        windowLabelText="% your window is blurred:" // Customizable label
      />
    </div>
  );
}

export default App;