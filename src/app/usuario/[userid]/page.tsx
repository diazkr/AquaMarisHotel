"use client";

import UserLayout from "@/componentes/user/UserLayout";

interface UserDashboardProps {
  params: {
    userid: string;
  };
}

const UserDashboard: React.FC<UserDashboardProps> = ({ params }) => {
  
  return (
    <div className=" mt-20">
        <UserLayout id={params.userid}></UserLayout>
        
    </div>
  );
};

export default UserDashboard;
