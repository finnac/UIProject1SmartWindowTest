import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <label>% opened</label>
          <Slider min={0} max={100} value={sliderValue} onChange={handleSliderChange} />
        </div>
        <div>
          <label>Value:</label>
          <input 
            type="number" 
            value={textInput} 
            onChange={handleInputChange}
            style={{ maxWidth: '50px' }}
          />
        </div>
      </div>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        {buttons.map((button) => (
          <label 
            key={button.id}
            className={`btn btn-${button.value} ${sliderValue === button.value ? 'active' : ''}`} 
            style={{ width: "100px" }}
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
    </div>
  );
}

export default ButtonOptions;
