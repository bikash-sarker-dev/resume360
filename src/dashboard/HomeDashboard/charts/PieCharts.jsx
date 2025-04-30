import React, { useState } from "react";
import Chart from "react-apexcharts";

const PieCharts = () => {
  const [chartData] = useState({
    series: [60, 30, 10], // Example: 60% resumes, 30% cover letters, 10% others
    options: {
      chart: {
        type: "pie",
      },
      labels: ["Resumes", "Cover Letters", "Other Documents"],
      colors: ["#588568", "#7dc696", "#FF4560"],
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
      <h2 className="text-xl font-semibold mb-4">Document Type Distribution</h2>
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
