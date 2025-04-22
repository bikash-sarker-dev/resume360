import React, { useState } from "react";
import Chart from "react-apexcharts";

const PieCharts = () => {
  const [chartData] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "pie",
      },
      labels: ["Apple", "Mango", "Orange", "Banana", "Grapes"],
      colors: ["#588568", "#7dc696", "#344e41", "#FF4560", "#775DD0"],
      legend: {
        position: "bottom",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div>
      <h2>Fruit Sales Distribution</h2>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        height={350}
      />
    </div>
  );
};

export default PieCharts;
