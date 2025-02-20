import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0feff1e079334741969ac2d719d1c391",
  }
});
