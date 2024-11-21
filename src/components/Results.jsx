import { calculateInvestmentResults, formatter } from '../util/investment.js'

export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  let totalInterest = 0;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((item) => {
          totalInterest = totalInterest + item.interest;

          return (
            <tr key={item.year}>
              <th>{item.year}</th>
              <th>{formatter.format(item.valueEndOfYear)}</th>
              <th>{formatter.format(item.interest)}</th>
              <th>{formatter.format(totalInterest)}</th>
              <th>{formatter.format(item.valueEndOfYear - totalInterest)}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
