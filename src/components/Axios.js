import axios from "axios";

const instance = axios.create({
  baseURL: "https://rao-tinder-backend.herokuapp.com/",
});

export default instance;
