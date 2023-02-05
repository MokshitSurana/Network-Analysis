import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(...registerables);

const PieChart = ({ chartData }: any) => {
  return (
    <div className="flex item-center justify-center">
      <div className="max-w-[350px]">
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default PieChart;
