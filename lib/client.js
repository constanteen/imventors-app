import axios from "axios";

export const inventorsClient = axios.create({
  baseURL: "https://invent-workset.herokuapp.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  }
});