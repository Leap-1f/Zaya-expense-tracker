import { Navbar } from "@/components/layout/Navbar";
import { Records, DayScrollRow, SelectCategory } from "@/components/records";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-slate-100 h-[100vh]">
        <div className="max-w-screen-xl navbar m-auto flex p-0 pt-[30px] items-start gap-[40px]">
          <Records />
          <div className="flex flex-col w-[100%]">
            <DayScrollRow />
            <SelectCategory />
          </div>
        </div>
      </div>
    </div>
  );
}
