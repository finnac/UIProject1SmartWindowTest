
import {ButtonOptions} from './components/ButtonOption'

const buttons = [
  { id: "option1", label: "None", value: "danger" },
  { id: "option2", label: "Half", value: "primary" },
  { id: "option3", label: "Full", value: "success" },
];

function App(){
  
  function handleButtonClick(event) {
    console.log(event.target.value);
  }

  return (
  <>  
   <div>
      <ButtonOptions buttons={buttons} name="options" onChange={handleButtonClick} />
   </div>
  </>
  );

}

export default App; 