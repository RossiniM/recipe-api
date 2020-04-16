import getGiphy from '../services/giphyService'


class RecipeMapper {

  async map(recipeList) {
    return Promise.all(recipeList.map(
      async (recipe) => {
        const { title, href, ingredients } = recipe;
        const ingredientsSorted = ingredients.split(",").sort((a, b) => (a.attr > b.attr) - (a.attr < b.attr));
        const { data: response } = await getGiphy(title).catch(error => console.log(error))
        const firstGif = response.data[0]
        return { title, ingredients: ingredientsSorted, link: href, gif: firstGif ? firstGif.url : "" }
      })
    );
  }
}
export default new RecipeMapper()