import { CardShape, PayWave } from "../utils/iconSvg";
import { WhiteGeld } from "../utils/IconGeld";
import { ArrowCircleUp, EllipseGreen, EllipseBlue } from "../utils/iconSvg";
import { CashCard } from "./CashCard";

export const AmountCards = () => {
  return (
    <div className="xl:flex xl:justify-between w-full gap-[40px] flex-wrap justify-center">
      <CashCard />
      <div className="flex flex-col">
        <div className="w-[386px] h-[56px] bg-white rounded-t-xl flex  items-center px-[24px]">
          <div className="flex items-center gap-[10px]">
            <EllipseGreen />
            <p>Your Income</p>
          </div>
        </div>
        <div className="w-[386px] h-[152px] bg-white rounded-b-xl pt-[10px] pb-[24px] px-[24px] border-t-2 flex flex-col justify-between">
          <div>
            <div className="font-bold text-[36px]">1,200,000$</div>
            <p>Your Income Amount</p>
          </div>
          <div className="flex">
            <ArrowCircleUp />
            <p>32% from last month</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="w-[386px] h-[56px] bg-white rounded-t-xl flex items-center px-[24px]">
          <div className="flex items-center gap-[10px]">
            <EllipseBlue />
            <p>Total Expenses</p>
          </div>
        </div>
        <div className="w-[386px] h-[152px] bg-white rounded-b-xl pt-[10px] pb-[24px] px-[24px] border-t-2 flex flex-col justify-between">
          <div>
            <div className="font-bold text-[36px]">-1,200,000$</div>
            <p>Your Income Amount</p>
          </div>
          <div className="flex">
            <ArrowCircleUp />
            <p>32% from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
  // <div>
  //     <div className="w-[386px] h-[214px] bg-blue-500 rounded-xl p-8 relative">
  //       <div className="flex flex-col h-full justify-between">
  //         <WhiteGeld width="80" height="30"/>
  //         <div>
  //           <p className="text-gray-300">Cash</p>
  //           <p className="text-xl text-white">10k</p>
  //         </div>
  //       </div>
  //       <div className="absolute z-2 bottom-0 right-0">
  //         <CardShape/>
  //       </div>
  //       <div className="absolute z-3 bottom-8 right-8"><PayWave/></div>
  //     </div>
  //   </div>
};
