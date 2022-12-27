import axios from "axios";

const baseurl = "https://fakestoreapi.com";
export const getdata = async (url) => {
  const { data } = await axios.get(`${baseurl}${url}`);
  return data;
};