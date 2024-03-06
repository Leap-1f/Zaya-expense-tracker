import { useState } from "react";

export const IncomeAmount = () => {
  const arr = [
    { name: "Your Income", amount: "1,200,000₮" },
    { name: "Total Expenses", amount: "-1,200,000₮" },
  ];
  return (
    <div className="flex gap-[40px] w-[70%]">
      {arr.map((el) => {
        return (
          <div className="card-body bg-white rounded-lg w-[384px] p-[20px] justify-between">
            <div className="flex p-[6px] w-[full] h-[35px] gap-[10px]">
              <img src="Ellipse 124.svg" alt="" />
              {el.name}
            </div>
            <div className=" flex flex-col gap-[10px]">
              <div className=" font-bold text-[28px]">{el.amount}</div>
              <p className=" text-stone-500">Your Income Amount</p>
              <div className="flex gap-[10px]">
                <img src="Leading icon.svg" alt="" />
                <p>32% from last month</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
