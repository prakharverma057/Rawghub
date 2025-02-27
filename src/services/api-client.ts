import axios from "axios";

export default axios.create({
  //baseURL: "https://www.freetogame.com/api",
  baseURL: "https://www.giantbomb.com/api",
  params: {
    api_key: "f8f7372606436fc818a47bc2ef4fc6e5ca81cb45",
    format: "json",
  },
});
