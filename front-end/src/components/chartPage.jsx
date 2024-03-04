import { Card, Header, IncomeAmount } from ".";

export const ChartPage = () => {
  return (
    <div>
      <Header />
      <div className=" bg-[#F3F4F6] px-[100px] py-[50px] flex">
        <Card />
        <IncomeAmount/>
      </div>
    </div>
  );
};
