import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
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
      backgroundColor: "rgb(132, 182, 2)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgb(243, 121, 51)",
    },
  ],
};

ChartJS.register(ArcElement, Tooltip, Legend);

export const dataD = {
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        "rgba(18, 111, 231, 0.8)",
        "rgba(231, 142, 18, 0.8)",
        "rgba(18, 231, 182, 0.8)",
        "rgba(204, 231, 18, 0.8)",
        "rgba(231, 18, 178, 0.8)",
      ],
    },
  ],
};

export function Charts() {
  return (
    <div className="xl:flex pb-[50px] w-full xl:justify-between gap-[40px] flex-wrap justify-center">
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
        <div className="w-[588px] h-[226px] bg-white rounded-b-xl py-[10px] px-[24px] border-t-2 flex justify-between items-center">
          <Doughnut data={dataD} />
          <ul className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <div className="w-[15px] h-[15px] rounded-full bg-[#126fe7cc]"></div>
              <li>Bills</li>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="w-[15px] h-[15px] rounded-full bg-[#e78e12cc] "></div>
              <li>Food</li>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="w-[15px] h-[15px] rounded-full bg-[#12e7b6cc] "></div>
              <li>Shopping</li>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="w-[15px] h-[15px] rounded-full bg-[#cce712cc] "></div>
              <li>Incurance</li>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="w-[15px] h-[15px] rounded-full bg-[#e712b2cc] "></div>
              <li>Clothing</li>
            </div>
          </ul>
          <ul className="flex flex-col gap-[10px]">
            <li>6'000'000$</li>
            <li>6'000'000$</li>
            <li>6'000'000$</li>
            <li>6'000'000$</li>
            <li>6'000'000$</li>
          </ul>
          <ul className="flex flex-col gap-[10px]">
            <li>16,6%</li>
            <li>16,6%</li>
            <li>16,6%</li>
            <li>16,6%</li>
            <li>16,6%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
