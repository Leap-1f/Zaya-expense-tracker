import { Geld } from "../utils/IconGeld";
import Link from "next/link";
import { useState, useEffect } from "react";

export const LogIn = () => {
  return (
    <div className="flex lg: *:w-1/2 *:h-[100vh] justify-center items-center">
      <div className="bg-white lg:flex w-[100vw] justify-center items-center pt-[100px]">
        <div className="flex flex-col items-center gap-[40px] w-[384px]">
          <Geld width="94" heigth="36"></Geld>
          <div className="*:text-center">
            <h3 className="mb-3 font-bold text-[24px]">Welcome Back</h3>
            <p>Welcome back, Please enter your details</p>
          </div>
          <div className="h-[176px] flex flex-col justify-between w-full">
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
            <button type="submit" className="btn btn-primary">
              <Link href="/stepper">Log in</Link>
            </button>
          </div>
          <div>
            <p>
              Dont have account?{" "}
              <Link href="/signup">
                <span className="text-blue-700 cursor-pointer">Sign up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-800 lg:flex hidden"></div>
    </div>
  );
};
