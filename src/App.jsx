
import React, { useState } from 'react';
import ButtonOptions from './components/ButtonOptions'


function App() {
  return (
    <div>
      <div class="hstack">
      <ButtonOptions 
        title="Window Opening" 
        windowLabelText="% your window is open:" // Customizable label
        nameoptions="options1"
      />
      <ButtonOptions 
        title="Privacy Blur" 
        windowLabelText="% your window is blurred:" // Customizable label
        nameoptions="options4"
      />
      </div>
      
      <ButtonOptions 
        title="Bug Screen" 
        windowLabelText="% your bug screen is on:" // Customizable label
        nameoptions="options2"
      />
      <ButtonOptions 
        title="Tint" 
        windowLabelText="% your window is tinted:" // Customizable label
        nameoptions="options3"
      />
      
    </div>
  );
}

export default App;