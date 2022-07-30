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
import {Line} from 'react-chartjs-2';
import faker from 'faker';

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
  elements:{
    line:{
        tension: 0.5
    }
  },
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'نمودار استفاده از منابع',
      font: {
        family: "IRANYekan",
        size: '18px'
      }
    },
    legend: {
        display: true,
        labels: {
          color: "rgb(255, 99, 132)",
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
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
      grid: {
        display: false,
        zeroLineColor: "transparent"
      },
      ticks:{
        font: {
            family: "IRANYekan",
            size: 12
        },
        }
    },
    xAxes: {
        grid: {
          display: false,
          zeroLineColor: "transparent"
        },
        ticks: {
          font: {
            family: "IRANYekan",
            size: 12
          },
        }
      }
  }
};

const labels = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'];

export const data = {
  labels,
  datasets: [
    {
      label: 'cpu',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Ram',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: '#2F6D80',
      backgroundColor: '#7eb3c3',
      yAxisID: 'y',
    },
    {
      label: 'دیسک',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: '#E98973',
      backgroundColor: '#F79489',
      yAxisID: 'y',
    },
  ],
};

export function MainChart() {
  return <Line options={options} data={data}/>;
}