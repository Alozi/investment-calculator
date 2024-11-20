export default function UserInput({ inputValues, onChangeInput }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initialInvestment">Initial investment</label>
          <input
            id="initialInvestment"
            type="number"
            min="0"
            value={inputValues.initialInvestment}
            onChange={onChangeInput}
          ></input>
        </div>
        <div>
          <label htmlFor="annualInvestment">Annual investment</label>
          <input
            id="annualInvestment"
            type="number"
            min="0"
            value={inputValues.annualInvestment}
            onChange={onChangeInput}
          ></input>
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expectedReturn">Expected return</label>
          <input
            id="expectedReturn"
            type="number"
            min="0"
            value={inputValues.expectedReturn}
            onChange={onChangeInput}
          ></input>
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            type="number"
            min="0"
            max="12"
            value={inputValues.duration}
            onChange={onChangeInput}
          ></input>
        </div>
      </div>
    </div>
  );
}
