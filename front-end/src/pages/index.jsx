import {
  LogIn,
  StepBody,
  Steps,
  Selects,
  Records,
  Loading,
  LastRecords,
  IncomeChart,
  IncomeAmount,
  Header,
  CreateAcc,
  Card,
  AddRecIncome,
  AddRecExpense,
} from "@/components";

export default function Home() {
  return (
    <div className="flex h-[100vh]">
      <div className="w-1/2 flex justify-center items-center">
        <LogIn />
      </div>
      <div className="w-1/2 bg-[#0166FF]"></div>
    </div>
  );
}
