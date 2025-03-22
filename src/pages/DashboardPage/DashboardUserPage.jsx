import React from "react";
import TotalUserRegistered from "../../dashboard/userDashboard/totalUserRegistered/TotalUserRegistered";
import TotalUsewrLoggedIn from "../../dashboard/userDashboard/TotalUserLoggedIn/TotalUsewrLoggedIn";
import TotalResumeUsed from "../../dashboard/userDashboard/TotalResumeUsed/TotalResumeUsed";
import ProfitChart from "../../dashboard/userDashboard/profitChart/ProfitChart";
import DownloadTracker from "../../dashboard/userDashboard/downloadTracker/DownloadTracker";

const DashboardUserPage = () => {
  return <div>

   <div className= "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
   <TotalUserRegistered></TotalUserRegistered>
   <TotalUsewrLoggedIn></TotalUsewrLoggedIn>
   </div>
   <div className= "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
   <TotalResumeUsed></TotalResumeUsed>
   <ProfitChart></ProfitChart>
   </div>
   <div className="flex justify-center items-center">
        <DownloadTracker />
      </div>
  </div>;
};

export default DashboardUserPage;
