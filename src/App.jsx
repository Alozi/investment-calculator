import { useState } from "react";

import UserInput from "./components/UserInput";
import Table from "./components/Table";

import { calculateInvestmentResults } from './util/investment'

const INITIAL_INPUT_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
};


function App() {
  const [userInput, setUserInput] = useState({...INITIAL_INPUT_VALUES});

  function handleChangeInput(event) {
    setUserInput((prevInputValues) => {
      return {
        ...prevInputValues,
        [event.target.id]: Number(event.target.value),
      };
    });
  }

  let resultTable = calculateInvestmentResults(userInput);

  return (
    <>
      <UserInput userInput={userInput} onChangeInput={handleChangeInput} />
      <Table result={resultTable} />
    </>
  );
}

export default App;
