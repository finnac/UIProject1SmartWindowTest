import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './ButtonOptions.css'; // Create a CSS file for additional styles

function ButtonOptions({ title, windowLabelText, nameoptions }) {
  const [sliderValue, setSliderValue] = useState(50);
  const [textInput, setTextInput] = useState('');

  const handleSliderChange = (value) => {
    setSliderValue(value);
    setTextInput(value.toString());
  }

  const handleInputChange = (e) => {
    let value = e.target.value;
    if (value > 100) {
      value = 100;
    } else if (value < 0) {
      value = 0;
    }
    setSliderValue(value);
    setTextInput(value.toString());
  }

  const handleButtonClick = (value) => {
    setSliderValue(value);
    setTextInput(value.toString());
  }

  return (
    <div className="control-wrapper">
      <h2>{title}</h2>
      <div className="button-group">
        <label 
          className={`btn btn-danger ${sliderValue === 0 ? 'active' : ''}`} 
        >
          <input
            type="radio"
            name={nameoptions}
            value={0}
            autoComplete="off"
            onChange={() => handleButtonClick(0)}
            checked={sliderValue === 0 && textInput === '0'}
          /> None
        </label>
        <label 
          className={`btn btn-primary ${sliderValue === 50 ? 'active' : ''}`} 
        >
          <input
            type="radio"
            name={nameoptions}
            value={50}
            autoComplete="off"
            onChange={() => handleButtonClick(50)}
            checked={sliderValue === 50 && textInput === '50'}
          /> Half
        </label>
        <label 
          className={`btn btn-success ${sliderValue === 100 ? 'active' : ''}`} 
        >
          <input
            type="radio"
            name={nameoptions}
            value={100}
            autoComplete="off"
            onChange={() => handleButtonClick(100)}
            checked={sliderValue === 100 && textInput === '100'}
          /> Full
        </label>
      </div>
      <div className="slider-container" style={{ width: '200px' }}>
        <Slider min={0} max={100} value={sliderValue} onChange={handleSliderChange} />
      </div>
      <div className="text-input-container">
        <label>{windowLabelText}</label>
        <input 
          type="number" 
          value={textInput} 
          onChange={handleInputChange}
          style={{ maxWidth: '50px' }}
        />
      </div>
  
    </div>
  );
}

export default ButtonOptions;