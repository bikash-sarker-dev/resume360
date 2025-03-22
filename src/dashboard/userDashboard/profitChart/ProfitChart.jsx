import React from 'react';

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';


ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const ProfitChart = () => {
    const data = {
        labels: ['Profit'],
        datasets: [
          {
            data: [65, 35], 
            backgroundColor: ['#36A2EB' ,'#FFFFFF'], 
            hoverBackgroundColor: ['#36A2EB', '#FFFFFF'],
          },
        ],
      };
    
      const options = {
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `${tooltipItem.label}: ${tooltipItem.raw}%`;
              },
            },
          },
        },
      };
    
      return (
        <div style={{ width: '50%', margin: 'auto' }}>
          <h3 className='text-2xl font-bold text-center bg-base-200 '>Profit Gain This Month.</h3>
          <Pie data={data} options={options} />
        </div>
      );
    };
    

export default ProfitChart;