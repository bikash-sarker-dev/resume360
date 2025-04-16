import React from "react";
import ColumnCharts from "../../dashboard/HomeDashboard/charts/ColumnCharts";
import PieCharts from "../../dashboard/HomeDashboard/charts/PieCharts";
import StatusCard from "../../dashboard/HomeDashboard/homeCard/StatusCard";

const DashboardHomePage = () => {
  return (
    <div className="py-10 pl-8 pr-10">
      <StatusCard />
      <div className="lg:flex  mt-15 ">
        <div className="lg:w-2/3">
          <ColumnCharts />
        </div>
        <div className="lg:w-1/3">
          <PieCharts />
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
