import { Geld } from "./utils/IconGeld";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="flex flex-col justify-center items-center gap-8">
        <Geld width="200" heigth="80"></Geld>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="loading loading-spinner loading-md"></div>
          <p>Түр хүлээнэ үү...</p>
        </div>
      </div>
    </div>
  );
};
