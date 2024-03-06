export const StepOne = () => {
  return (
    <div className="pt-[40px] flex flex-col gap-[145px]">
      <div className="flex flex-col items-center gap-[48px]">
        <div className="flex w-[107px] p-[6px] justify-between items-center">
          <img className="w-[30px] h-[30px]" src="Vector.png" alt="" />
          <h1 className="font-bold text-[24px]">Geld</h1>
        </div>
        <ul className="steps w-[240px]">
          <li className="step step-primary">Currency</li>
          <li className="step">Balance</li>
          <li className="step">Finish</li>
        </ul>
      </div>
      <div className="h-[308px] w-[384px] flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[24px]">
          <div className="h-[96px] flex flex-col justify-between items-center">
            <div className="flex justify-center items-center">
              <div className="w-[48px] h-[48px] bg-[#0166FF] absolute rounded-full"></div>
              <img
                className="w-[32px] bg-[#0166FF] relative rounded-full"
                src="Money.svg"
                alt=""
              />
            </div>
            <h2 className=" text-[24px] font-bold">Select base currency</h2>
          </div>
          <div className="w-[100%] flex flex-col gap-[10px]">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 w-[384px] h-[64px] text-start flex justify-between border-slate-300"
              >
                <div>MNT - Mongolian Tugrik</div>
                <img src="arrow_drop_down.svg" alt="" />
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>USD - US Dollar</a>
                </li>
                <li>
                  <a>CNY - Chinese Yuan</a>
                </li>
                <li>
                  <a>RUB - Russian Ruble</a>
                </li>
                <li>
                  <a>EUR - Euro</a>
                </li>
              </ul>
            </div>
            <p className=" text-[12px] text-slate-500">
              Your base currency should be the one you use most often. All
              transaction in other currencies will be calculated based on this
              one{" "}
            </p>
          </div>
        </div>

        <button
          className="btn bg-[#0166FF] rounded-full text-white text-[20px]"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
