import React, { useState } from "react";
import Chart from "react-apexcharts";

const ColumnCharts = () => {
  const [chartData] = useState({
    series: [
      {
        name: "Documents Created",
        data: [320, 480, 600, 540, 760, 900, 1050], // Replace with real data as needed
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
          columnWidth: "40%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      },
      yaxis: {
        title: {
          text: "Documents Created",
        },
      },
      fill: {
        opacity: 1,
      },
      colors: ["#7dc696"],
    },
  });

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Monthly Document Creation</h2>
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
