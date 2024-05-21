import { Bar } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import "./line.css";
const LineChart = ({ chartData }) => {
  return (
    <div className="line">
      <Bar data={chartData} />
    </div>
  );
};

export default LineChart;
