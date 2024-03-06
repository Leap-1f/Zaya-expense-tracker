export const Header = () => {
  return (
    <div className="flex justify-between py-[25px] px-[100px]">
      <div className="flex gap-[24px]">
        <img src="Vector.png" alt="" />
        <button className="font-bold">Dashboard</button>
        <button>Records</button>
      </div>
      <div className="flex gap-[24px]">
        <button className="h-full bg-blue-700 rounded-full text-white px-[15px]">
          + Record
        </button>
        <img className=" cursor-pointer" src="Placeholder.jpg" alt="" />
      </div>
    </div>
  );
};
