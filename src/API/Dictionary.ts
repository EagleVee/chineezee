import { GET, POST, PUT, DELETE } from "./index";

const API = {
  getWords: (filter: string) => {
    const path = "/characters/" + filter;
    return GET(path);
  }
};

export default API;
