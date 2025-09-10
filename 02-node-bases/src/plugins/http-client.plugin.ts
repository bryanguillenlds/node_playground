import axios from "axios";

const httpClientPlugin = {
  get: async (url: string) => {
    // const response = await fetch(url);
    // const data = await response.json();

    const { data } = await axios.get(url);
    return data;
  },
};

export { httpClientPlugin };
