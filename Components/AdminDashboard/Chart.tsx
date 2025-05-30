import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJs,
  ArcElement,
  Legend,
  Tooltip,
} from "chart.js";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

ChartJs.register(ArcElement, Legend, Tooltip);

const Chart = () => {
  const data = {
    datasets: [
      {
        label: "States",
        data: [21000, 1000, 19000, 15900],
        backgroundColor: ["#0062FF", "#FF974A", "#3DD598", "#FFC542"],
      },
    ],

    labels: ["Lagos", "Abuja", "Kano", "Kaduna"],
  };

  const options = {
    cutout: "90%",
    layout: {
      padding: 10,
    },
    elements: {
      arc: {
        borderWidth: 1,
        borderJoinStyle: "bevel",
      },
    },

    plugins: {
      legend: {
        text: "abuja",
        position: "bottom",
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          padding: 20,
          font: {
            size: 10,
            weight: "bold",
          },
        },
      },
    },
  };
  return (
    <section className=" relative w-full md:max-w-72 border border-slate-300 h-fit rounded-md">
      <div className=" flex items-center justify-between px-2 md:px-8 py-2">
        <MdOutlineKeyboardArrowLeft size={25} />
        <p className=" font-bold text-lg "> 2022 </p>
        <MdOutlineKeyboardArrowRight size={25} />
      </div>

      <div className=" absolute -translate-y-1/2 -translate-1/2 top-1/2 left-1/2 flex flex-col gap-2 justify-center items-center">
        <p className=" text-lg font-bold"> 22,870 </p>
        <span className=" text-neutral-500 text-lg ">Visitors this year </span>
      </div>

      <Doughnut data={data} options={options} />
    </section>
  );
};

export default Chart;
