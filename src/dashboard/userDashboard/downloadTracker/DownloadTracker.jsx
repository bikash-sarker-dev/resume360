import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DownloadTracker = () => {
    const [premiumDownloads, setPremiumDownloads] = useState(20);
  const [regularDownloads, setRegularDownloads] = useState(100);

 


  const data = {
    labels: ['Premium Users', 'Regular Users'], 
    datasets: [
      {
        label: 'Downloads',
        data: [premiumDownloads, regularDownloads], 
        backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };


  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Resume Download Statistics',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
  };

  return (
    <div className="download-tracker text-center">
      <h2 className='text-2xl font-bold'>Resume Download Tracker</h2>
     
      <div style={{ width: '400px', height: '300px' }} >
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default DownloadTracker;