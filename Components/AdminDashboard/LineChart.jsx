"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  LineController,
  Legend,
  Tooltip,
  Title,
  scales,
} from "chart.js";

const LineChart = () => {
  ChartJS.register(
    Legend,
    Title,
    Tooltip,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    LineController
  );

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [
          34000, 25000, 38000, 45000, 41000, 28000, 39000, 44800, 22300, 45000,
          43200, 30500,
        ],
        borderColor: "#60D0B2",
        backgroundColor: "#60D0B2",

        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },

      title: {
        display: false,
      },

      tooltip: {
        backgroundColor: "#515151",
        bodySpacing: 10,
        padding: 4,
        displaColors: false,
      },
    },

    layout: {
      padding: 10,
    },

    scales: {
      y: {
        min: 100000,
        max: 500000,
        ticks: {
          callback: (value) => {
            return value >= 1000 ? value / 1000 + "k" : value;
          },
        },
      },
    },
  };

  return (
    <section className=" container border border-slate-300 rounded-md px-8 py-8 ">
      <div className=" flex justify-between items-center gap-4 py-4 px-8">
        <div className=" flex flex-col gap-2 ">
          <h5 className=" font-medium font-rob text-slate-400 text-lg">
            Overall revenue
          </h5>
          <p className=" flex gap-2 font-bold text-xl text-black ">
            {" "}
            $48,000,521.231{" "}
            <span className=" font-medium text-tertially"> +20% </span>
          </p>
        </div>
        <select className=" bg-white border border-slate-300 px-8 py-3 rounded-md text-gray-600 appearance-none">
          <option value="Last Year" className=" option">
            {" "}
            Last Year{" "}
          </option>
        </select>
      </div>

      <Line data={data} options={options} />
    </section>
  );
};

export default LineChart;
