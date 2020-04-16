import axios from "axios";
const getGiphy = searchQuery => {
  const url = `${process.env.GIPHY_URL}`
  return axios.get(url, {
    headers: {
      api_key: process.env.API_KEY
    },
    params: {
      q: searchQuery,
      limit:1,
    }
  });
}
export default getGiphy