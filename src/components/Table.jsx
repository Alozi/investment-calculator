import { formatter } from "../util/investment";

export default function Table({ result }) {
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
        {result.map((item, index) => {
          totalInterest = totalInterest + item.interest;

          return (
            <tr key={index}>
              <th>{index + 1}</th>
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
