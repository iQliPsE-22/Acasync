import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
const LineChart = ({ listData }) => {
  return (
    <div>
      <Line data={listData} />
    </div>
  );
};

export default LineChart;
