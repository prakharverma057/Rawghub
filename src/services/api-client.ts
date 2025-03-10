import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "109e1def2ccd4646b32781a56ea74bb3",
  },
});
