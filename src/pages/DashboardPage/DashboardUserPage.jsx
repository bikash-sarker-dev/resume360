import React from "react";

import UserDashboard from "../../dashboard/userDashboard/userDashboard/UserDashboard";

const DashboardUserPage = () => {
  return <div>

   {/* <div className= "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
   <TotalUserRegistered></TotalUserRegistered>
   <TotalUsewrLoggedIn></TotalUsewrLoggedIn>
   </div>
   <div className= "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
   <TotalResumeUsed></TotalResumeUsed>
   <ProfitChart></ProfitChart>
   </div>
   <div className="flex justify-center items-center">
        <DownloadTracker />
      </div> */}

      <UserDashboard></UserDashboard>
  </div>;
};

export default DashboardUserPage;
