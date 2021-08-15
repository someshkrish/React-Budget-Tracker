import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const expensesValueArray = props.dataPoints.map(dataPoint => dataPoint.value);
  const maxExpense = Math.max(...expensesValueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxExpense}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
