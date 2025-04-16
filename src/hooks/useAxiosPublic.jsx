import axios from "axios";

export const axiosPublic = axios.create({
  // baseURL: 'https://resume360-server.vercel.app'
  baseURL: "http://localhost:5000",
});

export default function useAxiosPublic() {
  return axiosPublic;
}
