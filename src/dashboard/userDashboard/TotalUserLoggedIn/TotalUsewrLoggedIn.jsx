import { Users } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const TotalUsewrLoggedIn = () => {
   const [userCount, setUserCount] = useState(0);
   
     useEffect(() => {
    
       const userLoggedIn = async () => {
         const fakeApiUserCount = 56; 
         setUserCount(fakeApiUserCount);
       };
   
       userLoggedIn();
     }, []);
   
    
     return (
       <div className="flex flex-col items-center justify-center bg-base-200 p-4">
         <div className="card w-80 bg-r-info-card shadow-xl p-6 text-center">
           <div className="card-body">
             <h2 className="card-title flex items-center justify-center gap-2 text-gray-700 text-xl font-semibold">
               <Users className="w-6 h-6 font-bold text-xl" />
               <span>{userCount} Users Logged In </span>
             </h2>
            
           </div>
         </div>
       </div>
     );
   }
export default TotalUsewrLoggedIn;