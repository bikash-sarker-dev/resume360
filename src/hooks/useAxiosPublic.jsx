import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: 'https://resume360-server.vercel.app'
}) 

export default function useAxiosPublic() {
  return axiosPublic;
}