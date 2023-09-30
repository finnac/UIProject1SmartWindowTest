import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './ButtonOptions.css'; // Create a CSS file for additional styles

function ButtonOptions() {
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

// Check if the input value matches a button value
    const matchingButton = buttons.find(button => button.value.toString() === value.toString());
    if (matchingButton) {
      handleButtonClick(matchingButton.value);
    }
  }

  const handleButtonClick = (value) => {
    setSliderValue(value);
    setTextInput(value.toString());
  }

  const buttons = [
    { id: "option1", label: "None", value: 0 },
    { id: "option2", label: "Half", value: 50 },
    { id: "option3", label: "Full", value: 100 },
  ];

  return (
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
      <div className="slider-container" style={{ width: '270px' }}>
        <Slider min={0} max={100} value={sliderValue} onChange={handleSliderChange} />
      </div>
      <div className="text-input-container">
        <label style={{ paddingRight: '10px' }}>% your window is open:  </label>
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