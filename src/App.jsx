import { useState } from "react";

import UserInput from "./components/UserInput";
import Results from "./components/Results";

const INITIAL_INPUT_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState({ ...INITIAL_INPUT_VALUES });
  const inputIsValid = userInput.duration >= 1;

  function handleChangeInput(event) {
    setUserInput((prevInputValues) => {
      return {
        ...prevInputValues,
        [event.target.id]: Number(event.target.value),
      };
    });
  }

  return (
    <>
      <UserInput userInput={userInput} onChangeInput={handleChangeInput} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
