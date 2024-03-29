import React, { useState } from "react";
import { ArrowDropDown, PlusCircle } from "./utils/iconSvg";
export const AddRecord = () => {
  const [toggle, setToggle] = useState("expense");

  const handleChange = (event) => {
    setToggle(event.target.value);
  };
  return (
    <div className="modal" role="dialog">
      <div className="modal-box min-w-[792px] h-fit">
        <form method="dialog">
          <label
            htmlFor="my_modal_6"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
        </form>
        <h3 className="font-bold text-lg">Add Record</h3>
        <div className="*:w-1/2 flex border-t-2">
          <div className="p-[24px] flex flex-col gap-[20px]">
            <div className="relative w-[full] h-10">
              <div className="bg-[#e4e4e4] w-full h-full rounded-full"></div>
              <div className="absolute top-0 left-0 z-1 w-full h-full">
                <div className="flex mb-9 overflow-hidden w-full h-full ">
                  <input
                    type="radio"
                    id="radio-one"
                    name="switch-one"
                    value="expense"
                    checked={toggle === "expense"}
                    onChange={handleChange}
                    className="absolute w-1 h-1 opacity-0"
                  />
                  <label
                    htmlFor="radio-one"
                    className={`w-1/2 px-4 py-2 transition rounded-full text-center ${
                      toggle === "expense"
                        ? "bg-blue-600 text-white"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    Expense
                  </label>
                  <input
                    type="radio"
                    id="radio-two"
                    name="switch-one"
                    value="income"
                    checked={toggle === "income"}
                    onChange={handleChange}
                    className="absolute w-1 h-1 opacity-0"
                  />
                  <label
                    htmlFor="radio-two"
                    className={`w-1/2 px-4 py-2 transition rounded-full text-center ${
                      toggle === "income"
                        ? "bg-green-600 text-white"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    Income
                  </label>
                </div>
              </div>
            </div>
            <div className="input input-bordered flex flex-col p-1 h-auto gap-2 bg-slate-200">
              <label className="text-gray-700">Amount</label>
              <input className="" type="number" placeholder="₮ 0.00" />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700">Category</label>
              <details className="dropdown">
                <summary className="flex justify-between btn bg-slate-200 text-slate-400 w-full input-bordered">
                  Choose
                  <ArrowDropDown />
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full">
                  <li>
                    <label htmlFor="my_modal_7" className="btn flex justify-start">
                      <PlusCircle />
                      Add Category
                    </label>
                  </li>
                </ul>
              </details>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <label className="text-gray-700">Date</label>
                <input
                  type="date"
                  className="flex justify-end btn bg-slate-200 text-slate-400 w-[150px] input-bordered"
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700">Date</label>
                <input
                  type="time"
                  className="flex justify-end btn bg-slate-200 text-slate-400 w-[150px] input-bordered"
                ></input>
              </div>
            </div>
            <button className="btn btn-active btn-primary rounded-full">
              Add Record
            </button>
          </div>
          <div className="p-[24px] flex flex-col justify-between">
            <div className="flex flex-col">
              <label className="text-gray-700">Payee</label>
              <input
                type="text"
                placeholder="Write here"
                className="input input-bordered w-full max-w-xs bg-slate-200"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700">Payee</label>
              <input
                type="text"
                placeholder="Write here"
                className="input input-bordered w-full max-w-xs h-[250px] bg-slate-200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* <div className="modal" role="dialog">
  <div className="modal-box min-w-[700px]">
    <div className="modal-action absolute right-4 top-0">
      <label
        htmlFor="my_modal_6"
        className="btn btn-sm btn-ghost"
      >
        ✕
      </label>
    </div>
    <h3 className="font-bold text-lg mb-3 ">Add Record</h3>
    <div className="flex gap-10 border-t py-3">
      <div className="flex flex-col gap-5">
        <div className="relative w-[full] h-10">
          <div className="bg-[#e4e4e4] w-full h-full rounded-[2q0px]"></div>
          <div className="absolute top-0 left-0 z-1 w-full h-full">
            <div className="flex mb-9 overflow-hidden w-full h-full ">
              
              <input
                type="radio"
                id="radio-two"
                name="switch-one"
                value="income"
                checked={selectedValue === "income"}
                onChange={handleChange}
                className="absolute w-1 h-1 opacity-0"
              />
              <label
                htmlFor="radio-two"
                className={`w-1/2 font-medium text-sm px-4 py-2 transition rounded-full text-center ${
                  selectedValue === "income"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700 "
                }`}
              >
                Income
              </label>
            </div>
          </div>
        </div>
        <div className="input input-bordered flex flex-col p-1 h-auto gap-2">
          <label className="text-gray-700">Amount</label>
          <input className="" type="text" placeholder="₮ 0.00" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-gray-700">
            Category
          </label>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled defaultValue className="text-gray-300">
              Find or choose category
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div className="flex *:flex *:flex-col *:gap-2 justify-between *:w-[48%] ">
          <form>
            <label htmlFor="transactionDate" className="text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="transactionDate"
              name="date"
              className="input input-bordered"
            />
          </form>
          <form>
            <label htmlFor="transactionTime" className="text-gray-700">
              Time
            </label>
            <input
              type="time"
              id="transactionTime"
              name="time"
              className="input input-bordered"
            />
          </form>
        </div>
        <button
          className={`${
            selectedValue === "income" ? "bg-green-600" : "bg-blue-600"
          } btn text-white rounded-full`}
        >
          Add Record
        </button>
      </div>
      <div className="w-1/2 flex flex-col justify-between">
        <div className="">
          <label htmlFor="">Payee</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs mt-2"
          />
        </div>
        <div className="">
          <label htmlFor="">Note</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full h-[250px] mt-2"
          />
        </div>
      </div>
    </div>
    {/*
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">
        Close!
      </label>
    </div> */

//   </div>
// </div> */}
