import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['direct', 'Referral','Social',],
  datasets: [
    {
      label: '',
      data: [55,30,15],
      backgroundColor: [
        '#4e73df',
        '#36b9cc',
        '#1cc88a'
        
      ],
      borderColor: [
        '#4e73df',
        '#36b9cc',
        '#1cc88a'
        
        
      ],
      borderWidth: 1,
    },
  ],
};

export function Doughnutchart() {
  return <Doughnut data={data} />;
}