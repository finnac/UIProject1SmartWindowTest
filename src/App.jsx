
import React, { useState } from 'react';
import ButtonOptions from './components/ButtonOptions'


function App() {
  return (
    <div>
      <ButtonOptions 
        title="Window Opening" 
        windowLabelText="% your window is open:" // Customizable label
      />
    </div>
  );
}

export default App;