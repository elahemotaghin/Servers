import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    cutout: 60,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
          display: false,
          labels: {
            font: {
              family: "IRANYekan"
            }
          },
          tooltip: {
            bodyFont: {
              family: "IRANYekan",
              size: 12
            }
          }
      },
      tooltips: {
          backgroundColor: "#f5f5f5",
          titleFontFamily: "IRANYekan",
          bodyFontFamily: "IRANYekan",
          bodySpacing: 4,
          xPadding: 12,
        },
    },
  };

export const data = {
  labels: ['مصرف شده', 'باقی مانده'],
  datasets: [
    {
      label: '# of Votes',
      data: [30, 70],
      backgroundColor: [
        '#F8AFA6',
        '#eaeaea'
      ],
      borderColor: [
        '#E98973',
        '#d3d3d3'
      ],
      borderWidth: 1,
    },
  ],
};

export function ResourceUsageChart() {
  return (<Doughnut options={options} data={data}/>);
}