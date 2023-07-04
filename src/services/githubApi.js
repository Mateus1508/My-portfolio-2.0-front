import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com/users/Mateus1508/"
});

export default githubApi;