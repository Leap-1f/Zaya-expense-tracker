import { BlueWall, HomeIcon } from "../utils/iconSvg";

export const LastRecords = () => {
  return (
    <div className="flex flex-col w-full pb-[30px]">
      <div className="w-full h-[56px] bg-white rounded-t-xl flex border-b-2  items-center px-[24px]">
        <div className="flex items-center gap-[10px]">
          <p>Last Records</p>
        </div>
      </div>
      <div className="w-full h-fit bg-white rounded-b-xl px-[24px]">
        <div className=" flex justify-between items-center border-b-2">
          <div className="flex gap-[20px] py-[20px]">
            <div className="w-[40px] h-[40px] rounded-full bg-blue-600 flex justify-center items-center">
              <HomeIcon />
            </div>
            <div className="flex flex-col">
              <p>Lending & Rending</p>
              <p>3 hours ago</p>
            </div>
          </div>
          <div>-100$</div>
        </div>
        <div className=" flex justify-between items-center border-b-2">
          <div className="flex gap-[20px] py-[20px]">
            <div className="w-[40px] h-[40px] rounded-full bg-blue-600 flex justify-center items-center">
              <HomeIcon />
            </div>
            <div className="flex flex-col">
              <p>Lending & Rending</p>
              <p>3 hours ago</p>
            </div>
          </div>
          <div>-100$</div>
        </div>
        <div className="border-b-2 flex justify-between items-center">
          <div className="flex gap-[20px] py-[20px]">
            <div className="w-[40px] h-[40px] rounded-full bg-blue-600 flex justify-center items-center">
              <HomeIcon />
            </div>
            <div className="flex flex-col">
              <p>Lending & Rending</p>
              <p>3 hours ago</p>
            </div>
          </div>
          <div>-100$</div>
        </div>
        <div className="border-b-2 flex justify-between items-center">
          <div className="flex gap-[20px] py-[20px]">
            <div className="w-[40px] h-[40px] rounded-full bg-blue-600 flex justify-center items-center">
              <HomeIcon />
            </div>
            <div className="flex flex-col">
              <p>Lending & Rending</p>
              <p>3 hours ago</p>
            </div>
          </div>
          <div>-100$</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-[20px] py-[20px]">
            <div className="w-[40px] h-[40px] rounded-full bg-blue-600 flex justify-center items-center">
              <HomeIcon />
            </div>
            <div className="flex flex-col">
              <p>Lending & Rending</p>
              <p>3 hours ago</p>
            </div>
          </div>
          <div>-100$</div>
        </div>
      </div>
    </div>
  );
};
