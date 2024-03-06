import { Card, Header, IncomeAmount, IncomeExpenseChart, LastRecords } from ".";

export default function DashFirstPage() {
  return (
    <div>
      <Header />
      <div className=" bg-[#F3F4F6] px-[150px] py-[50px] flex gap-[40px]">
        <Card />
        <IncomeAmount />
        <IncomeExpenseChart />
        <LastRecords />
      </div>
    </div>
  );
}
