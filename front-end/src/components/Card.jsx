export const Card = () => {
  return (
    <div className="card-body bg-blue-700 rounded-lg h-[220px] w-[384px] p-[32px] justify-between">
      <div className="flex p-[6px] w-[92px] h-[35px] justify-between">
        <img src="Vector (1).png" alt="" />
        <div className="font-bold text-[20px] flex items-center">Geld</div>
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
