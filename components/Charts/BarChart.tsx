import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(...registerables);

const BarChart = ({ chartData }: any) => {
    return <Bar data={chartData} />;
};

export default BarChart;
