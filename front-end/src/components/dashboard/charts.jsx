import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = ["Jul", "Jul", "Jul", "Jul", "Jul", "Jul", "Jul"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const dataD = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function Charts() {
  return (
    <div className="flex pb-[50px] w-full justify-between">
      <div className="flex flex-col pt-[30px]">
        <div className="w-[588px] h-[56px] bg-white rounded-t-xl flex  items-center px-[24px]">
          <div className="flex items-center gap-[10px]">
            <p>Income Expense</p>
          </div>
        </div>
        <div className="w-[588px] h-[226px] bg-white rounded-b-xl py-[10px] px-[24px] border-t-2 flex flex-col justify-between">
          <div className="flex justify-center items-center h-[200px]">
            <Bar options={options} data={data} />
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-[30px]">
        <div className="w-[588px] h-[56px] bg-white rounded-t-xl flex  items-center px-[24px]">
          <div className="flex items-center gap-[10px]">
            <p>Income Expense</p>
          </div>
        </div>
        <div className="w-[588px] h-[226px] bg-white rounded-b-xl py-[10px] px-[24px] border-t-2 flex flex-col justify-between">
          <div className="flex justify-center items-center">
            {/* <Doughnut dataD={dataD} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
