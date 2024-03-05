import { Card, Header, IncomeAmount } from ".";

export const ChartPage = () => {
  return (
    <div>
      <Header />
      <div className=" bg-[#F3F4F6] px-[150px] py-[50px] flex gap-[40px]">
        <Card />
        <IncomeAmount />
      </div>
    </div>
  );
};
