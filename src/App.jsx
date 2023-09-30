
import React, { useState, useContext } from 'react';
import ButtonOptions from './components/ButtonOptions'
import { ButtonOptionsProvider }from './components/ButtonOptionsContext.jsx';


function App() {
  return (
    <ButtonOptionsProvider>
      <div>
      <ButtonOptions 
  id="windowOpening" 
  title="Window Opening" 
  windowLabelText="% your window is open:" 
/>
<ButtonOptions 
  id="bugScreen" 
  title="Bug Screen" 
  windowLabelText="% your bug screen is on:" 
/>
<ButtonOptions 
  id="tint" 
  title="Tint" 
  windowLabelText="% your window is tinted:" 
/>
<ButtonOptions 
  id="privacyBlur" 
  title="Privacy Blur" 
  windowLabelText="% your window is blurred:" 
/>
    </div>
    </ButtonOptionsProvider>
    
  );
}

export default App;