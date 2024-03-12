import { IconStep2 } from "../utils/iconSvg";
import { useContext } from "react";
import { Context } from "../utils/context";

export const StepTwo = () => {
  const { signUpUserInfo, setSignUpUserInfo } = useContext(Context);
  const handleChange = (event) => {
    const { value } = event.target;

    // setSignUpUserInfo({
    //   ...signUpUserInfo,
    //   amount: value,
    // });
  };
  console.log(signUpUserInfo);
  return (
    <div className="w-[400px] min-h-[240px] flex flex-col items-center gap-6">
      <div className="flex flex-col gap-4 items-center mb-4">
        <IconStep2></IconStep2>
        <h3 className="font-bold text-lg">Set up your cash Balance</h3>
      </div>
      <input
        type="text"
        placeholder="Amount"
        className="input input-bordered w-full "
        onChange={handleChange}
        // value={signUpUserInfo.amount}
      />
      <p className="text-gray-500 text-left text-xs w-full">
        How much cash do you have in your wallet?
      </p>
    </div>
  );
};



// export const StepTwo = () => {
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
//           <li className="step">Finish</li>
//         </ul>
//       </div>
//       <div className="h-[308px] w-[384px] flex flex-col gap-[32px]">
//         <div className="flex flex-col gap-[24px]">
//           <div className="h-[96px] flex flex-col justify-between items-center">
//             <div className="flex justify-center items-center">
//               <div className="w-[48px] h-[48px] bg-[#0166FF] absolute rounded-full"></div>
//               <img
//                 className="w-[32px] bg-[#0166FF] relative rounded-full"
//                 src="Coins.svg"
//                 alt=""
//               />
//             </div>
//             <h2 className=" text-[24px] font-bold">Set up your cash Balance</h2>
//           </div>
//           <div className="w-[100%] flex flex-col gap-[10px]">
//             <input
//               type="text"
//               placeholder="Email"
//               className="input input-bordered w-full bg-neutral-100"
//             />
//             <p className=" text-[12px] text-slate-500">
//               How much cash do you have in your wallet?
//             </p>
//           </div>
//         </div>

//         <button className="btn bg-[#0166FF] rounded-full text-white text-[20px]">
//           Confirm
//         </button>
//       </div>
//     </div>
//   );
// };

