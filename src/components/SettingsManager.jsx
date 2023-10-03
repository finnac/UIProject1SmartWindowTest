import React, { useState, useEffect } from 'react';
import ButtonOptions from './ButtonOptions';
import './SettingsManager.css'; // Create a CSS file for additional styles

function SettingsManager() {
    const [globalSettings, setGlobalSettings] = useState({});
    const [settingName, setSettingName] = useState('');
    const [savedSettingsList, setSavedSettingsList] = useState([]);
    const [selectedSetting, setSelectedSetting] = useState(null);
  
    useEffect(() => {
      const savedGlobalSettings = JSON.parse(localStorage.getItem('globalSettings'));
      if (savedGlobalSettings) {
        setGlobalSettings(savedGlobalSettings.settings);
        setSettingName(savedGlobalSettings.name || '');
      }
  
      const savedSettingsList = JSON.parse(localStorage.getItem('savedSettingsList')) || [];
      setSavedSettingsList(savedSettingsList);
    }, []);
  
    const handleSaveGlobalSettings = (name) => {
      const settingsToSave = {
        name,
        settings: { ...globalSettings }
      };
  
      const updatedSavedSettingsList = [...savedSettingsList, settingsToSave];
      setSavedSettingsList(updatedSavedSettingsList);
  
      localStorage.setItem('savedSettingsList', JSON.stringify(updatedSavedSettingsList));
      setSettingName('');
    }

    const handleDeleteSavedSetting = (index) => {
        const updatedSavedSettingsList = [...savedSettingsList];
        updatedSavedSettingsList.splice(index, 1);
        setSavedSettingsList(updatedSavedSettingsList);
        localStorage.setItem('savedSettingsList', JSON.stringify(updatedSavedSettingsList));
      }
  
    const handleLoadGlobalSettings = () => {
      if (selectedSetting) {
        setGlobalSettings({ ...selectedSetting.settings });
        setSettingName(selectedSetting.name || '');
      }
    }
  
    const handleButtonChange = (nameoptions, settings) => {
      setGlobalSettings(prevSettings => ({
        ...prevSettings,
        [nameoptions]: settings
      }));
    }
  
    const handleLoadSavedSetting = (savedSetting) => {
      setSelectedSetting(savedSetting);
    }
  
    const handleClearSelectedSetting = () => {
      setSelectedSetting(null);
      setGlobalSettings({});
    }
  
    return (
      <div>
        <div className="hstack">
          <ButtonOptions 
            title="Window Opening" 
            windowLabelText="% your window is open:" 
            nameoptions="options1"
            onChange={handleButtonChange}
            globalSettings={globalSettings}
          />
          <ButtonOptions 
            title="Privacy Blur" 
            windowLabelText="% your window is blurred:" 
            nameoptions="options4"
            onChange={handleButtonChange}
            globalSettings={globalSettings}
          />
        </div>
        <div className="hstack">
          <div>
            <ButtonOptions 
              title="Bug Screen" 
              windowLabelText="% your bug screen is on:" 
              nameoptions="options2"
              onChange={handleButtonChange}
              globalSettings={globalSettings}
            />
            <ButtonOptions 
              title="Tint" 
              windowLabelText="% your window is tinted:" 
              nameoptions="options3"
              onChange={handleButtonChange}
              globalSettings={globalSettings}
            />
          </div>
          <div>
            <div className='hstack'>
            <input 
                type="text" 
                placeholder="Name your setting here" 
                value={settingName}
                onChange={(e) => setSettingName(e.target.value)}
                className="input-options"
              />
              <button className="btn btn-info" onClick={() => handleSaveGlobalSettings(settingName)}>Save Global Settings</button>
            </div>
            
            <div className="saved-settings-list">
              <h3>Saved Settings:</h3>
              <ul>
                {savedSettingsList.map((savedSetting, index) => (
                  <li key={index}>
                    <button className='btn btn-secondary' onClick={() => handleLoadSavedSetting(savedSetting)}>{savedSetting.name}</button>
                    <button className='btn btn-danger' onClick={() => handleDeleteSavedSetting(index)}>Delete</button>
                  </li>
                ))}
              </ul>
            </div>
            {selectedSetting && (
              <div>
                <h3>Selected Setting: {selectedSetting.name}</h3>
                <div className='hstack'>
                <button className='btn btn-info' onClick={handleClearSelectedSetting}>Clear Selected Setting</button>
                <button className='btn btn-info' onClick={handleLoadGlobalSettings}>Load Global Settings</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
       
    );
  }
  
  export default SettingsManager;