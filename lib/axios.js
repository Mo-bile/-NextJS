import axios from "axios";

const instance = axios.create({
  // baseURL: "https://learn.codeit.kr/api/codeitmall",
  baseURL: "https://learn.codeit.kr/api/watchit",
});

export default instance;
