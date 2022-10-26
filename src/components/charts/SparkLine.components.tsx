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
import { RiContrastDropLine } from 'react-icons/ri';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
interface SparkLineProps {
  id: string;
  height: number;
  width: number;
  color: string;
  type: any;
  currentColor: string;
  data?: any;
}
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const datas = {
  labels,
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [
        { x: 1, yval: 2 },
        { x: 2, yval: 6 },
        { x: 3, yval: 8 },
        { x: 4, yval: 5 },
        { x: 5, yval: 10 },
      ],
    },
  ],
};
function SparkLine({ id, height, width, color, data, type, currentColor }: SparkLineProps) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            console.log({ context });
            let label = context.dataset.label || '';

            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };
  return <Line options={options} data={data} />;
}

export default SparkLine;
