export const Records = () => {
  return (
    <div className="w-[282px] h-fit flex flex-col gap-[24px] bg-white rounded-xl p-[20px]">
      <p>Records</p>
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
        <h1>Types</h1>
      </div>
      <div>
        <h2>Category</h2>
      </div>
    </div>
  );
};
