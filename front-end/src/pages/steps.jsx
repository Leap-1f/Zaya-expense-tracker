import {
  Welcome,
  StepBody,
  Steps,
  Selects,
  Records,
  Loading,
  LastRecords,
  IncomeChart,
  IncomeAmount,
  Header,
  Card,
  AddRecIncome,
  AddRecExpense,
} from "@/components";

export default function Home() {
  return (
    <div className="flex h-[100vh] w-[100vw] justify-center items-start">
      <Steps />
    </div>
  );
}
