import { Users } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const TotalUserRegistered = () => {
    const [userCount, setUserCount] = useState(0);

  useEffect(() => {
 
    const userRegistered = async () => {
      const fakeApiUserCount = 120; 
      setUserCount(fakeApiUserCount);
    };

    userRegistered();
  }, []);

 
  return (
    <div className="flex flex-col items-center justify-center bg-base-200 p-4">
      <div className="card w-80 bg-r-info-card shadow-xl p-6 text-center">
        <div className="card-body">
          <h2 className="card-title flex items-center justify-center gap-2 text-gray-700 text-xl font-semibold">
            <Users className="w-6 h-6" />
            <span>{userCount} Users Registered</span>
          </h2>
         
        </div>
      </div>
    </div>
  );
}

export default TotalUserRegistered;