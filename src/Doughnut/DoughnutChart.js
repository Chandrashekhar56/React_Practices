import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      data: [300, 50, 100, 200, 75, 150],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FFA07A'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FFA07A'],
    },
  ],
};

const options = {
  // Customize options as needed
};

const DoughnutChart = () => (
  <div style={{ width: '400px', height: '400px' }}>
    {/* Adjust width and height as needed */}
    <h2>Doughnut Example</h2>
    <Doughnut data={data} options={options} />
  </div>
);

export default DoughnutChart;
