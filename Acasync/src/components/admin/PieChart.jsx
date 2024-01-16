import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import "./line.css";
const PieChart = ({ chartData }) => {
  return (
    <div id = "pie">
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
