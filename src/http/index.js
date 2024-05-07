import axios from "axios";
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// const mulipartApi = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
//   withCredentials: true,
//   headers: {
//     "Content-type": "multipart/form-data",
//     Accept: "application/json",
//   },
// });

// list of all the endpoints

//[+] Product Apis [+]
export const loginApi = (data) => api.post("/admin/login", data);
export const logoutApi = () => api.post("/admin/logout");
export const reserchApi = () => api.get("/admin/refresh");

export const getUsersApi = (data) => api.post("/admin/users",data);
// export const banUserApi = (data,id) => api.put(`/admin/users/${id}`,data);
export const getUserApi = (id) => api.get(`/admin/users/${id}`);
export const getUserFeedbackApi = (id) => api.get(`/admin/feedbacks/${id}`);

export const getHospitalsApi = (data) => api.post("/admin/hospitals",data);
export const approveHospitalApi = (data,id) => api.put(`/admin/approve/${id}`,data);
export const getHospitalApi = (id) => api.get(`/admin/users/${id}`);

export const getStatsApi = () => api.get(`/admin/stats`);

// Interceptors
api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await axios.get(`${process.env.REACT_APP_API_URL}/admin/refresh`, {
          withCredentials: true,
        });
        return api.request(originalRequest);
      } catch (error) {
        console.log(error.message);
      }
    }
    throw error;
  }
);
export default api;
