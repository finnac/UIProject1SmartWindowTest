import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function ButtonOptions() {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  }

  const handleInputChange = (e) => {
    let value = e.target.value;
    if (value > 100) {
      value = 100;
    } else if (value < 0) {
      value = 0;
    }
    setSliderValue(value);
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
            value={sliderValue} 
            onChange={handleInputChange}
            style={{ maxWidth: '50px' }}
          />
        </div>
      </div>
      <div className="btn-group btn-group-toggle btn-group-lg" data-toggle="buttons">
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
              onChange={() => setSliderValue(button.value)}
            />{" "}
            {button.label}
          </label>
        ))}
      </div>
    </div>
  );
}

export default ButtonOptions;
