import React from 'react';
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TotalResumeUsed = () => {
    const [templateUsage, setTemplateUsage] = useState({
        "Templete1": 30,
        "Templete2": 50,
        "Templete3": 20,
        "Templete4": 40,
        "Templete5": 80,
      });
    
      const data = {
        labels: Object.keys(templateUsage),
        datasets: [
          {
            label: "Templates Used By Our Users",
            data: Object.values(templateUsage),
            backgroundColor: ["#3b82f6", "#ef4444", "#22c55e", "#f59e0b","#9333ea"],
            borderRadius: 5,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
        },
      };
    
      return (
        <div className="flex flex-col items-center justify-center  bg-base-200 p-4">
          <div className="card w-96 bg-base-100 shadow-xl p-6 text-center">
            <div className="card-body">
              <h2 className="card-title text-xl font-semibold text-gray-700">Resume Template Usage</h2>
              <Bar data={data} options={options} />
            </div>
          </div>
        </div>
      );
    }
    
export default TotalResumeUsed;