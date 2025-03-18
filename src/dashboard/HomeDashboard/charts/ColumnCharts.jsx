import React, { useState } from "react";
import Chart from "react-apexcharts";

const ColumnCharts = () => {
  const [chartData] = useState({
    series: [
      {
        name: "Revenue",
        data: [450, 650, 800, 700, 900, 1100, 1200], // Data points
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false, // Hide value labels on bars
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      },
      yaxis: {
        title: {
          text: "Revenue (USD)",
        },
      },
      fill: {
        opacity: 1,
      },
      colors: ["#008FFB"],
    },
  });
  return (
    <div>
      <h2>Monthly Revenue</h2>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ColumnCharts;
