import axios from "axios";

export const inventorsClient = axios.create({
  baseURL: "https://metroandmeyer.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
