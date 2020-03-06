import {GET, POST, PUT, DELETE} from "./index";

const API = {
  getUser: (uuid: string) => {
    const path = "sample/" + uuid;
    return GET(path);
  },
};

export default API;
