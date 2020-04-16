import { Router } from 'express';
import  recipeController  from './controllers/recipeController';

const routes = Router();

routes.get('/', (req, res) => res.status(200).json({status:"healthy"}));

routes.get('/recipes', (req, res) => recipeController.getRecipes(req,res))

export default routes;