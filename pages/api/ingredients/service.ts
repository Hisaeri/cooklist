import { Ingredient } from "../../../types/ingredients";
import ingredientsDb from "./db";

class IngredientsService {
    getIngredients(): Ingredient[] {
        return ingredientsDb.getIngredients();
    }

    getIngredient(id: number): Ingredient {
        const ingredient = ingredientsDb.getIngredient(id);
        if (!ingredient) { throw new Error('NotFound'); }
        return ingredient;
    }
}

const ingredientsService = new IngredientsService();
export default ingredientsService;