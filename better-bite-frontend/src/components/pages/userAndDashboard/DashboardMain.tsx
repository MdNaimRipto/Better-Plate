import PageToggle from "./PageToggle";

const DashboardMain = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-10 mt-[80px]">
      {/* Top Tabs */}
      <PageToggle />
    </div>
  );
};

export default DashboardMain;
