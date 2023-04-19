import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','aug','sep','oct','nov','dec'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Data 1',
      data: ["0", "10000", "5000", "15000", "10000", "20000", "15000","25000","20000","30000","25000","40000"],
      borderColor: '#4e73df',
      backgroundColor: '#4e73df',
    }
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}
