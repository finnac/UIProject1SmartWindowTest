import React, { useState, useContext } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './ButtonOptions.css'; // Create a CSS file for additional styles
import { ButtonOptionsProvider, useButtonOptions } from './ButtonOptionsContext.jsx'; 

function ButtonOptions({ id, title, windowLabelText }) {
  const { sliderValue, textInput, handleSliderChange, handleInputChange, handleButtonClick } = useButtonOptions(id);
  const buttons = [
    { id: "option1", label: "None", value: 0 },
    { id: "option2", label: "Half", value: 50 },
    { id: "option3", label: "Full", value: 100 },
  ];

  return (
    <div className="control-wrapper">
      <h2>{title}</h2>
      <div className="button-options-container">
        <div className="button-group">
          {buttons.map((button) => (
            <label 
              key={button.id}
              className={`btn ${button.value === 0 ? 'btn-danger' : button.value === 50 ? 'btn-primary' : 'btn-success'} ${sliderValue === button.value ? 'active' : ''}`} 
            >
              <input
                type="radio"
                name="options"
                value={button.value}
                autoComplete="off"
                onChange={() => handleButtonClick(button.value)}
                checked={sliderValue === button.value && textInput === button.value.toString()}
              />{" "}
              {button.label}
            </label>
          ))}
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
    </div>
  );
}

export default ButtonOptions;