export const AddCategory = () => {
  return (
    <div className="modal" role="dialog">
      <div className="modal-box min-w-[494px]">
        <form method="dialog">
          <label
            htmlFor="my_modal_5"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
        </form>

        <h3 className="font-bold text-lg">Add Category</h3>

        <div className="modal-action"></div>
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
