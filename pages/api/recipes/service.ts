import { Recipe } from "../../../types/recipes";
import recipesDb from "./db";

class RecipesService {
    getRecipes(): Recipe[] {
        return recipesDb.getRecipes();
    }

    getRecipe(id: number): Recipe {
        const recipe = recipesDb.getRecipe(id);
        if (!recipe) { throw new Error('NotFound'); }
        return recipe;
    }
}

const recipesService = new RecipesService();
export default recipesService;