import { Navbar } from "@/components/layout/Navbar";
import { Records } from "@/components/records/Records";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-slate-200">
        <div className="max-w-screen-xl navbar m-auto ">
          <Records />
        </div>
      </div>
    </div>
  );
}
