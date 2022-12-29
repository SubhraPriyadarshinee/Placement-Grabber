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
    x: {
      grid: {
        display: false
      }
    },
    y: {
      ticks: {
        callback: function (value) {
          return value;
        },
      },
      grid: {
        display: false
      }
    },
  },
  tension: 3,
  lineTension: 0.4,
  legend: {
    display: true,
    labels: {
      fontColor: '#333',
      usePointStyle: true
    }
  }
};

const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Previous week",
      data: [15, 2, 10, 8, 15, 10, 20, 17, 25],
      lineTension: 0.4,
      borderColor: '#705AD1',
      pointRadius: 0
    },
    {
      fill: true,
      label: "Income",
      data: [17, 10, 17, 18, 26, 12, 23, 20, 25],
      lineTension: 0.4,
      borderColor: '#E79BE3',
      pointRadius: 0
    }
  ],
};
const colors = [
  'white',
  '#705AD1',
  '#705AD1',
  'white',
  '#E79BE3',
  'teal',
  'blue',
  'purple',
];



function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea,i) {
  var colorStart = colors[0];
  var colorMid = colors[1];
  var colorEnd = colors[2];
  if(i==="Income"){
     colorStart = colors[3];
   colorEnd = colors[4];
  }



  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

 
  if(i==="Income"){
    gradient.addColorStop(0, colorStart);
    // gradient.addColorStop(0, colorMid);
    gradient.addColorStop(0.9, colorEnd);
 }else{
  gradient.addColorStop(0, colorStart);
  // gradient.addColorStop(0, colorMid);
  gradient.addColorStop(0.45, colorEnd);
 }

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
        backgroundColor: createGradient(chart.ctx, chart.chartArea,dataset.label)
        
      })),
    };
    setChartData(chartData);
  }, []);
  return (
    <div className="chart">

      {/* <Line data={data} options={options} /> */}
      <Chart ref={chartRef} type='line' data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
