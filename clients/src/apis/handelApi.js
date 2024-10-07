import axiosClient from "./axiosClient";

const handelApi = async (url, data, method) => {
  return await axiosClient(url, { method: method || "get", data });
};

export default handelApi;
