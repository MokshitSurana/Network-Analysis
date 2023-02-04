import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(...registerables);

const PieChart = ({ chartData }: any) => {
    return <Pie data={chartData} />;
};

export default PieChart;
