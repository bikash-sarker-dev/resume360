import React from "react";
import ColumnCharts from "../../dashboard/HomeDashboard/charts/ColumnCharts";
import PieCharts from "../../dashboard/HomeDashboard/charts/PieCharts";
import StatusCard from "../../dashboard/HomeDashboard/homeCard/StatusCard";

const DashboardHomePage = () => {
  return (
    <div>
      <StatusCard />
      <div className="lg:flex gap-10 mt-5 p-10">
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
