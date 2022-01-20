import axios from "axios";

// common configuration in single instance
// const accessToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGFsYSIsInVzZXJJZCI6IjYxYTY4YTE2ZWRiMjRlMTA0NWY1ZWY4MCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjM4Mzg4Njg3LCJleHAiOjE2Mzg0NzUwODd9.o0QPZ7qASxkb0d4pPUyTqqodJTjRORO1lzfMKox30nM';

const accessToken = localStorage.getItem("token");

//   url: "http://localhost:5000/api/v1"
//   https://jumia-apis.herokuapp.com/api/v1

const lang = localStorage.getItem('lang') || 'en';
// axios.defaults.headers.common['Accept-Language'] = lang;
export const axiosInstance = axios.create({
  baseURL:"http://localhost:5000/api/v1",
  headers: {
    authorization: `Bearer ${accessToken}`,
    'Accept-Language': `${lang}`
  },
});














// interceptor
// axiosInstance.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     // if (localStorage.getItem("token")) {
//     //     config.headers["autherization"] = localStorage.getItem("token");
//     // }
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );
