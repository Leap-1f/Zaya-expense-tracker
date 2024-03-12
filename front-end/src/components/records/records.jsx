import { Eye } from "../utils/iconSvg";

export const Records = () => {
  return (
    <div className="w-[282px] h-fit flex flex-col gap-[24px] bg-white rounded-xl p-[20px] items-start">
      <p className="font-bold text-[24px]">Records</p>
      <button
        htmlFor="my_modal_6"
        className="btn btn-primary w-full btn-sm rounded-full"
      >
        + Add
      </button>
      <input
        type="text"
        placeholder="search"
        className="w-full border-2 px-[24px] rounded-md"
      />
      <div>
        <h1 className="font-bold">Types</h1>
        <div className="flex flex-col gap-[5px] pl-[10px] pt-[10px]">
          <div className="flex gap-[10px] items-center">
            <div className="w-[20px] h-[20px] rounded-full border-2"></div>
            <p>All</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <div className="w-[20px] h-[20px] rounded-full border-2"></div>
            <p>Income</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <div className="w-[20px] h-[20px] rounded-full border-2"></div>
            <p>Expense</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-bold">Category</h2>
        <div className="flex flex-col gap-[10px] pl-[10px] pt-[10px]">
          <div className="flex gap-[10px] items-center">
            <Eye />
            <p>Food & Drinks</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <Eye />
            <p>Shopping</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <Eye />
            <p>Housing</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <Eye />
            <p>Transportation</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <Eye />
            <p>Vehicle</p>
          </div>
          <button htmlFor="my_modal_6" className="w-full text-start">
            + Add Category
          </button>
        </div>
        <div className="font-bold pt-[20px]">Amount Range</div>
        <div className="w-full flex gap-[40px] pt-[20px] pb-[20px]">
          <input
            type="number"
            placeholder="0"
            className="h-[35px] w-[100px] bg-slate-100 border-2 rounded-md px-[10px]"
          />
          <input
            type="number"
            placeholder="100"
            className="h-[35px] w-[100px] bg-slate-100 border-2 rounded-md px-[10px]"
          />
        </div>
        <input
          type="range"
          min={0}
          max="100"
          value="60"
          className="range range-primary"
        />
      </div>
    </div>
  );
};
