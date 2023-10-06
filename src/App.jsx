
import React, { useState } from 'react';
import ButtonOptions from './components/ButtonOptions'
import SettingsManager from './components/SettingsManager';

function App() {
  return (
    <div className="App">
      <h1 style={{ marginLeft: '5px'}}>Welcome to your smart window!</h1>
      <SettingsManager />
    </div>
  );
}

export default App;