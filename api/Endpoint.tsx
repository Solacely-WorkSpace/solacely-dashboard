import axios from "axios";

const Endpoint = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://solacely-backend-4g.onrender.com/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default Endpoint;
