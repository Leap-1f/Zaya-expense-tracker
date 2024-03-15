import { AmountCards, Charts, LastRecords } from "@/components/dashboard/index";
import { Navbar } from "@/components/layout/Navbar";
import { useRouter } from "next/router";

export default function Home() {
  const { push } = useRouter();

  return (
    <div>
      <Navbar />
      <div className="bg-slate-100 h-[100vh]">
        <div className="max-w-screen-xl navbar m-auto sm:flex-wrap p-0 pt-[30px]">
          <AmountCards />
          <Charts />
          <LastRecords />
        </div>
      </div>
    </div>
  );
}
