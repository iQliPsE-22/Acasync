import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
const LineChart = ({ chartData }) => {
  return (
    <div style={{ backgroundColor: "rgb(50,50,50)", width: "70%" }}>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
