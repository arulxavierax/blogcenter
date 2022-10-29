import axios from "axios";
// import jwt from "jsonwebtoken";

const baseURL = "http://localhost:8080";

let token = JSON.parse(localStorage.getItem("token"));
let refreshtoken = JSON.parse(localStorage.getItem("refreshtoken")) 

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: token,
    refreshtoken: refreshtoken,
  },
});

axiosInstance.interceptors.response.use(async (req) => {
  try {
    // let data = jwt.verify(token);
  } catch (e) {
    if (e.message == "jwt expired") {
      const response = await axios.post(`${baseURL}/users/refresh`, {
        headers: {
          refreshtoken: refreshtoken,
        },
      });
      localStorage.setItem("token", JSON.stringify(response.data));
      req.headers.Authorization = response.data;
      return req;
    }
  }
});

export default axiosInstance;
