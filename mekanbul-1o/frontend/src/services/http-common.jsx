import axios from "axios";
export default axios.create({
  baseURL: "https://mekanbul2-gulsenaksoys-projects.vercel.app/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  },
});
