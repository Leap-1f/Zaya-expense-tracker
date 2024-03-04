export const IncomeAmount = () => {
  return (
    <div className="card-body bg-white rounded-lg h-[220px] w-[384px] p-[32px] justify-between">
      <div className="flex p-[6px] w-[92px] h-[35px]">
        <img src="Ellipse 124.svg" alt="" />
        <div className="font-bold text-[20px] flex items-center text-white">
          Your Income
        </div>
      </div>
      <div className=" flex justify-between">
        <div>
          <p className=" text-gray-400">Cash</p>
          <p className=" font-bold w-[108px] h-[32px] text-white">10,000.00</p>
        </div>
        <img className=" w-[40px]" src="Logo.svg" alt="" />
      </div>
    </div>
  );
};
