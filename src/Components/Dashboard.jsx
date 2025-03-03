import { DashboardMain, DashboardSidesheet } from "../Containers";
const Dashboard = () => {
  return (
    <div className="bg-gray-200 pt-[100px] w-full flex flex-row justify-start items-center">
      <DashboardSidesheet />
      <DashboardMain />
    </div>
  );
};

export default Dashboard;
