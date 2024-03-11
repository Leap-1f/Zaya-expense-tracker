// export const StepThree = () => {
//   return (
//     <div className="pt-[40px] flex flex-col gap-[141px]">
//       <div className="flex flex-col items-center gap-[48px]">
//         <div className="flex w-[107px] p-[6px] justify-between items-center">
//           <img className="w-[30px] h-[30px]" src="Vector.png" alt="" />
//           <h1 className="font-bold text-[24px]">Geld</h1>
//         </div>
//         <ul className="steps w-[240px]">
//           <li className="step step-primary">Currency</li>
//           <li className="step step-primary">Balance</li>
//           <li className="step step-primary">Finish</li>
//         </ul>
//       </div>
//       <div className="h-[308px] w-[384px] flex flex-col gap-[32px]">
//         <div className="flex flex-col gap-[24px]">
//           <div className="h-[96px] flex flex-col justify-between items-center">
//             <div className="flex justify-center items-center">
//               <div className="w-[48px] h-[48px] bg-[#0166FF] absolute rounded-full"></div>
//               <img
//                 className="w-[32px] bg-[#0166FF] relative rounded-full"
//                 src="Check.svg"
//                 alt=""
//               />
//             </div>
//             <h2 className=" text-[24px] font-bold">Good Job!</h2>
//           </div>
//           <p className=" text-[16px] text-slate-500 flex text-center">
//             Your very first account has been created. Now continue to dashboard
//             and start tracking
//           </p>
//         </div>

//         <button className="btn bg-[#0166FF] rounded-full text-white text-[20px]">
//           Go to Dashboard
//         </button>
//       </div>
//     </div>
//   );
// };


import { IconStep3 } from "../utils/iconSvg";

export const StepThree = () => {
  return (
    <div className="w-[400px] min-h-[240px] flex flex-col items-center gap-6">
      <div className="flex flex-col gap-4 items-center my-5">
        <IconStep3></IconStep3>
        <h3 className="font-bold text-lg">Good Job!</h3>
      </div>
      <p className="text-gray-500 text-center text-base">
        Your very first account has been created. Now continue to dashboard and
        start tracking
      </p>
    </div>
  );
};