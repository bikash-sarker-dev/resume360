import { useState } from "react";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useOrganizer = () => {
  const { user } = useAuth();
  const [admin, setAdmin] = useState(false);
  const axiosPublic = useAxiosPublic();

  let adminFun = async () => {
    const res = await axiosPublic.get(`/user/role/${user.email}`);
    let adminValue = res.data.organizer;
    setAdmin(adminValue);
  };
  adminFun();
  return { admin };
};

export default useOrganizer;
