const INGREDIENTS_MAX_NUMBER = 3
import getRecipe from '../services/recipeService'
import recipeMapper from '../controllers/recipeMapper'
class RecipeController {

  async  getRecipes(req, res) {
    if (!req.query.i)
      return res.status(400).json({ error: "it is missing ingredients params" });
    const ingredients = req.query.i.split(",")
    const searchQuery = ingredients.slice(0, INGREDIENTS_MAX_NUMBER).join()
    const { data: recipeList } = await getRecipe(searchQuery).catch(error => res.status(500).json({ error }))

    const recipes = await recipeMapper.map(recipeList.results)

    return res.status(200).json({
      keywords: ingredients,
      recipes
    });
  };
}

export default new RecipeController();