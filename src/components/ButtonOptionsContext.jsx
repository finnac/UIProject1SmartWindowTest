import React, { useContext, useState } from 'react';

const ButtonOptionsContext = React.createContext();

export function ButtonOptionsProvider({ children }) {
  const [sliderValues, setSliderValues] = useState({});
  const [textInputs, setTextInputs] = useState({});

  const handleSliderChange = (id, value) => {
    setSliderValues(prevValues => ({ ...prevValues, [id]: value }));
    setTextInputs(prevInputs => ({ ...prevInputs, [id]: value.toString() }));
  }

  const handleInputChange = (id, e) => {
    let value = e.target.value;
    if (value > 100) {
      value = 100;
    } else if (value < 0) {
      value = 0;
    }
    setSliderValues(prevValues => ({ ...prevValues, [id]: value }));
    setTextInputs(prevInputs => ({ ...prevInputs, [id]: value.toString() }));
  }

  const handleButtonClick = (id, value) => {
    setSliderValues(prevValues => ({ ...prevValues, [id]: value }));
    setTextInputs(prevInputs => ({ ...prevInputs, [id]: value.toString() }));
  }

  return (
    <ButtonOptionsContext.Provider value={{
      sliderValues,
      textInputs,
      handleSliderChange,
      handleInputChange,
      handleButtonClick,
    }}>
      {children}
    </ButtonOptionsContext.Provider>
  );
}

export function useButtonOptions(id) {
  const context = useContext(ButtonOptionsContext);
  if (!context) {
    throw new Error('useButtonOptions must be used within a ButtonOptionsProvider');
  }

  const { sliderValues, textInputs, handleSliderChange, handleInputChange, handleButtonClick } = context;
  
  return {
    sliderValue: sliderValues[id] || 50,
    textInput: textInputs[id] || '50',
    handleSliderChange: (value) => handleSliderChange(id, value),
    handleInputChange: (e) => handleInputChange(id, e),
    handleButtonClick: (value) => handleButtonClick(id, value),
  };
}