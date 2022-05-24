import axios from "axios";

export const endpoint = "https://invetor-investor.herokuapp.com/api";

export const inventorsClient = axios.create({
  baseURL: endpoint,
  headers: {
    "Content-Type": "application/json",
  },
});
