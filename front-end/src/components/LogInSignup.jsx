import { useState, useEffect } from "react";
import { Loading } from "./Loading..";

export default function LogInSignup ()  {
  const [signUp, setSignUp] = useState(false);

  const handleSignUp = () => {
    setSignUp(true);
  };
  const handleLogIn = () => {
    setSignUp(false);
  };
  return (
    <div>
      {!signUp && (
        <div className="flex flex-col justify-center items-center gap-[40px]">
          <div className="flex p-[6px] w-[92px] h-[35px] justify-between">
            <img src="Vector.png" alt="" />
            <div className="font-bold text-[20px] flex items-center">Geld</div>
          </div>
          <div className="h-[64px] flex flex-col items-center justify-between">
            <h1 className="font-bold text-[24px]">Welcome back</h1>
            <p className=" text-slate-700">
              Welcome back, Please enter your details
            </p>
          </div>
          <div className="flex flex-col h-[176px] justify-between w-[384px]">
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full bg-neutral-100"
            />
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered w-full bg-neutral-100"
            />
            <button className="btn bg-[#0166FF] rounded-full text-white text-[20px]">
              Log in
            </button>
          </div>
          <div className="flex">
            <p>Don't have account?</p>
            <button onClick={handleSignUp} className="text-[#0166FF] px-[12px]">
              Sign up{" "}
            </button>
          </div>
        </div>
      )}
      {signUp && (
        <div className="flex flex-col justify-center items-center gap-[40px]">
          <div className="flex p-[6px] w-[92px] h-[35px] justify-between">
            <img src="Vector.png" alt="" />
            <div className="font-bold text-[20px] flex items-center">Geld</div>
          </div>
          <div className="h-[64px] flex flex-col items-center justify-between">
            <h1 className="font-bold text-[24px]">Create Geld account</h1>
            <p className=" text-slate-700">
              Sign up below to create your Wallet account
            </p>
          </div>
          <div className="flex flex-col h-[304px] justify-between w-[384px]">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full bg-neutral-100"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full bg-neutral-100"
            />
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered w-full bg-neutral-100"
            />
            <input
              type="text"
              placeholder="Re-password"
              className="input input-bordered w-full bg-neutral-100"
            />
            <button className="btn bg-[#0166FF] rounded-full text-white text-[20px]">
              Sign up
            </button>
          </div>
          <div className="flex">
            <p>Already have account?</p>
            <button onClick={handleLogIn} className="text-[#0166FF] px-[12px]">
              Log in
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
