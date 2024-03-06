export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[172px] h-[184px] flex flex-col gap-[48px]">
        <div className="flex p-[6px] w-fit h-[64px] justify-between">
          <img src="Vector.png" alt="" />
          <div className="font-bold text-[20px] flex items-center">Geld</div>
        </div>
        <div className="w-[123px] h-[72px] flex flex-col justify-between">
          <span className="loading loading-spinner loading-lg"></span>
          <p>Түр хүлээнэ үү...</p>
        </div>
      </div>
    </div>
  );
}
