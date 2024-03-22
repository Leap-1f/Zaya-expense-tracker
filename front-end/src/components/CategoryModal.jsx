export const AddCategory = () => {
  return (
    <div className="modal" role="dialog">
      <div className="modal-box min-w-[792px] h-fit">
        <form method="dialog">
          <label
            htmlFor="my_modal_8"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
        </form>
        <h3 className="font-bold text-lg">Add Record</h3>
        <div className="*:w-1/2 flex">
          <div className="p-[24px] flex flex-col gap-[20px]">
            <div className="relative w-[full] h-10">
              <div className="bg-[#e4e4e4] w-full h-full rounded-full"></div>
              <div className="absolute top-0 left-0 z-1 w-full h-full"></div>
            </div>

            <div className="">
              <div className="input input-bordered flex flex-col p-1 h-auto gap-2 bg-slate-200">
                <label className="text-gray-700">Amount</label>
                <input className="" type="text" placeholder="₮ 0.00" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// import React, { useState } from "react";
// export const AddRecord = () => {
//   const [selectedValue, setSelectedValue] = useState("expense");

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };
//   return (
//     <dialog id="my_modal_3" className="modal">
//       <div className="modal-box">
//         <form method="dialog">
//           <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//             ✕
//           </button>
//         </form>
//         <h3 className="font-bold text-lg">Add Record</h3>
//         <p className="py-4">Press ESC key or click on ✕ button to close</p>
//       </div>
//     </dialog>
//   );
// };
