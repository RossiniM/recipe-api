import axios from "axios";
 const getRecipe = searchQuery => {
  const url = `${process.env.RECIPE_URL}`
  return axios.get(url, {
    params: {
      i: searchQuery
        }
  });
}
  export default getRecipe