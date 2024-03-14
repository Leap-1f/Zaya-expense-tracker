import { HomeIcon } from "../utils/iconSvg";

export const SelectCategory = () => {
  return (
    <div className="w-full pt-[10px] flex flex-col gap-[15px]">
      <div className="flex justify-between items-center bg-white px-[24px] rounded-lg shadow-md">
        <div className=" flex items-center gap-[10px]">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox" />
            </label>
          </div>
          <p>Select All</p>
        </div>
        <p>-4,000</p>
      </div>
      <p>Day</p>
      <div className="flex flex-col gap-[15px]">
        <div className="flex justify-between items-center bg-white px-[24px] py-[5px] rounded-lg shadow-md">
          <div className=" flex items-center gap-[10px]">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
              </label>
            </div>
            <div className="bg-black rounded-full w-[30px] h-[30px] flex justify-center items-center">
              <HomeIcon />
            </div>
            <div>
              <p>Category</p>
              <p className="text-[12px]">Time</p>
            </div>
          </div>
          <p>-2,000</p>
        </div>
        <div className="flex justify-between items-center bg-white px-[24px] py-[5px] rounded-lg shadow-md">
          <div className=" flex items-center gap-[10px]">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
              </label>
            </div>
            <div className="bg-black rounded-full w-[30px] h-[30px] flex justify-center items-center">
              <HomeIcon />
            </div>
            <div>
              <p>Category</p>
              <p className="text-[12px]">Time</p>
            </div>
          </div>
          <p>-2,000</p>
        </div>
      </div>
    </div>
  );
};
