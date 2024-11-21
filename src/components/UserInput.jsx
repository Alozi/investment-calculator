export default function UserInput({ userInput, onChangeInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initialInvestment">Initial investment</label>
          <input
            id="initialInvestment"
            type="number"
            min="0"
            value={userInput.initialInvestment}
            onChange={onChangeInput}
            required
          />
        </div>
        <div>
          <label htmlFor="annualInvestment">Annual investment</label>
          <input
            id="annualInvestment"
            type="number"
            min="0"
            value={userInput.annualInvestment}
            onChange={onChangeInput}
            required
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expectedReturn">Expected return</label>
          <input
            id="expectedReturn"
            type="number"
            min="0"
            value={userInput.expectedReturn}
            onChange={onChangeInput}
            required
          />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            type="number"
            min="0"
            value={userInput.duration}
            onChange={onChangeInput}
            required
          />
        </div>
      </div>
    </section>
  );
}
