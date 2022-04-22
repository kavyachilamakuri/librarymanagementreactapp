import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:44316/api/Course",
  headers: {
    "Content-type": "application/json"
  }
});