import React, { useRef, useEffect, useState } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import type { ChartData, ChartArea } from 'chart.js';

import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Chart } from 'react-chartjs-2';




ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

// const options={
//     indexAxis: 'y',
//     elements: {
//         bar: {
//             borderWidth: 2,
//         },
//     },
//     responsive: true,
//     plugins: {
//         legend: {
//             position: 'left',
//         },
//         title: {
//             display: true,
//             text: 'Chart.js ',
//         },
//     },
// };

const options = {
  responsive: true,
  scales: {
    y: {
      ticks: {
        callback: function (value) {
          return value;
        },
      },
    },
  },
  tension:3,
  lineTension:0.4,
  legend: {
    display: true,
    labels: {
        fontColor: '#333',
        usePointStyle:true
    }
}
};

const labels = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Previous week",
      data: [5,2,10,8,15,10,20,17,25],
      lineTension: 0.4,
      borderColor: '#610C63'
    }
  ],
};
const colors = [
    'white',
    '#F900BF',
    '#9900F0',
    'lime',
    'green',
    'teal',
    'blue',
    'purple',
  ];
 


function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  var colorStart = colors[0];
    var colorMid = colors[1];
    var colorEnd = colors[2];
  
    
  
    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  
    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(0.5, colorMid);
    gradient.addColorStop(1, colorEnd);
  
    return gradient;
  }

  

const LineChart = () => {
    const chartRef = useRef<ChartJS>(null);
    const [chartData, setChartData] = useState<ChartData<'bar'>>({
        datasets: [],
      });
    useEffect(() => {

        const chart = chartRef.current;
        if (!chart) {
            return;
          }
          const chartData = {
            ...data,
            datasets: data.datasets.map(dataset => ({
              ...dataset,
              backgroundColor: createGradient(chart.ctx, chart.chartArea)
            })),
          };
          setChartData(chartData);
    }, []);
  return (
    <div className="chart">
        
      {/* <Line data={data} options={options} /> */}
      <Chart ref={chartRef} type='line' data={chartData} />
    </div>
  );
};

export default LineChart;
