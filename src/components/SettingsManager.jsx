import React, { useState, useEffect } from 'react';
import ButtonOptions from './ButtonOptions';

function SettingsManager() {
  const [globalSettings, setGlobalSettings] = useState({});
  const [settingName, setSettingName] = useState('');

  useEffect(() => {
    const savedGlobalSettings = JSON.parse(localStorage.getItem('globalSettings'));
    if (savedGlobalSettings) {
      setGlobalSettings(savedGlobalSettings.settings);
      setSettingName(savedGlobalSettings.name || '');
    }
  }, []);

  const handleSaveGlobalSettings = (name) => {
    const settingsToSave = {
      name,
      settings: globalSettings
    };
    localStorage.setItem('globalSettings', JSON.stringify(settingsToSave));
    setSettingName('');
  }

  const handleLoadGlobalSettings = () => {
    const savedSettings = JSON.parse(localStorage.getItem('globalSettings'));
    if (savedSettings && savedSettings.settings) {
      setGlobalSettings(savedSettings.settings);
      setSettingName(savedSettings.name || '');
    }
  }

  const handleButtonChange = (nameoptions, settings) => {
    setGlobalSettings(prevSettings => ({
      ...prevSettings,
      [nameoptions]: settings
    }));
  }

  return (
    <div>
      <div>
        <input 
          type="text" 
          placeholder="Enter a name for your settings" 
          value={settingName}
          onChange={(e) => setSettingName(e.target.value)}
        />
        <button onClick={() => handleSaveGlobalSettings(settingName)}>Save Global Settings</button>
        <button onClick={handleLoadGlobalSettings}>Load Global Settings</button>
      </div>
      <div className="hstack">
        <ButtonOptions 
          title="Window Opening" 
          windowLabelText="% your window is open:" 
          nameoptions="options1"
          uniqueIdentifier="component1"
          onChange={handleButtonChange}
          globalSettings={globalSettings}
        />
        <ButtonOptions 
          title="Privacy Blur" 
          windowLabelText="% your window is blurred:" 
          nameoptions="options4"
          uniqueIdentifier="component2"
          onChange={handleButtonChange}
          globalSettings={globalSettings}
        />
      </div>
      <ButtonOptions 
        title="Bug Screen" 
        windowLabelText="% your bug screen is on:" 
        nameoptions="options2"
        uniqueIdentifier="component3"
        onChange={handleButtonChange}
        globalSettings={globalSettings}
      />
      <ButtonOptions 
        title="Tint" 
        windowLabelText="% your window is tinted:" 
        nameoptions="options3"
        uniqueIdentifier="component4"
        onChange={handleButtonChange}
        globalSettings={globalSettings}
      />
    </div>
  );
}

export default SettingsManager;
