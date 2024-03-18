import { useContext, useEffect, useState } from "react";
import { Geld } from "../utils/IconGeld";
import Link from "next/link";

export const SignUp = () => {
  return (
    <div className="flex lg: *:w-1/2 *:h-[100vh] w-[100vw] justify-center items-center">
      <div className="bg-white lg:flex justify-center items-center pt-[100px]">
        <div className="flex flex-col items-center gap-[40px] w-[384px]">
          <Geld width="94" heigth="36"></Geld>
          <div className="*:text-center">
            <h3 className="mb-3 font-bold text-[24px]">Create Geld account</h3>
            <p>Sign up below to create your Wallet account</p>
          </div>
          <div className="h-[304px] flex flex-col justify-between w-full">
            <input
              id=""
              type="text"
              placeholder="Name"
              className="input input-bordered bg-slate-200"
              name="name"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered bg-slate-200"
              name="email"
            />
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered bg-slate-200"
              name="password"
            />
            <input
              type="text"
              placeholder="Re-password"
              className="input input-bordered bg-slate-200"
              name="rePassword"
            />
            <Link href="/dashboard">
              <button type="submit" className="btn btn-primary w-full">
                Sign up
              </button>
            </Link>
          </div>
          <div>
            <p>
              Already have account?{" "}
              <Link href="/">
                <span className="text-blue-700 cursor-pointer">Log in</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-800 lg:flex hidden"></div>
    </div>
  );
};

// import { useState, useEffect, useContext } from "react";
// import { useRouter } from "next/router";
// import React from "react";
// import { StepOne, StepTwo, StepThree, Stepper } from "../stepper/index";
// import { Context } from "../utils/context";
// import { PreviousButton } from "../utils/iconSvg";

// export const Steps = () => {
//   const { isLoading, startLoading, signUpUserInfo } = useContext(Context);
// const [currentStep, setCurrentStep] = useState(0);

// const numberOfSteps = 3;
// const confirmButton = () => {
//   return currentStep === 2 ? "Return to login" : "Confirm";
// };
// const { push } = useRouter();

//   const confirm = async () => {
//     if (currentStep < 2) {
//       setCurrentStep(currentStep + 1);
//     } else if (currentStep === 2) {
//       console.log("-----------------");
//       console.log(signUpUserInfo);
//       try {
//         const res = await fetch("http://localhost:8080/api/signup", {
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//           method: "POST",
//           body: JSON.stringify(signUpUserInfo),
//         });
//         const data = await res.json();
//         console.log(data);
//       } catch (err) {
//         console.log(err);
//       }
//       startLoading();
//       push("/");
//     }
//   };
//   const previous = () => {
//     setCurrentStep(currentStep - 1);
//   };
//   useEffect(() => {
//     if (currentStep === 0 || currentStep === 3) {
//         startLoading();
//     }
//   }, [currentStep]);

//   console.log(currentStep, "currentstep");
//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center w-full h-[100vh]">
//         <div className="flex flex-col justify-center items-center gap-8">
//           <Geld width="200" heigth="80"></Geld>
//           <div className="flex flex-col justify-center items-center gap-2">
//             <div className="loading loading-spinner loading-md"></div>
//             <p>Түр хүлээнэ үү...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="flex flex-col items-center h-[100vh] justify-center gap-10 relative">
//       <div className="flex flex-col items-center gap-5 absolute z-1 top-[30px]">
//         <Geld width="94" heigth="36"></Geld>
//         <Stepper currentStep={currentStep} numberOfSteps={numberOfSteps} />
//       </div>
//       <div className="relative w-[400px] ">
//         <div className="absolute -left-10 top-[130px] z-1 ">
//         <button
//           onClick={previous}
//           disabled={currentStep === 0}
//           className="flex justify-center items-center rounded-full hover:scale-150 active:scale-125 w-5 h-5"
//         >
//           <PreviousButton currentStep={currentStep}/>
//         </button>
//         </div>

//         <div className="flex flex-col items-center justify-center">
//         <div>
//           {currentStep === 0 && <StepOne />}
//           {currentStep === 1 && <StepTwo />}
//           {currentStep === 2 && <StepThree />}
//         </div>
//         <button
//         onClick={confirm}
//         // disabled={currentStep === numberOfSteps - 1}
//         className="btn btn-primary w-full mt-[50px]"
//       >
//         {confirmButton()}
//       </button>

//         </div>

//       </div>

//     </div>
//   );
// };
