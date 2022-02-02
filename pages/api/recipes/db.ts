import { Recipe, RecipeDetails } from "../../../types/recipes";
import ingredientsDb from "../ingredients/db";

class RecipesDb {
    getRecipes(): Recipe[] {
        return this.getRecipesFromRecipesDetails(this.getRecipesDetails());
    }

    getRecipe(id: number): Recipe | undefined {
        return this.getRecipes().find((recipe => { return recipe.id === id }));
    }

    private getRecipesFromRecipesDetails(recipes: RecipeDetails[]): Recipe[] {
        return recipes.map(recipe => {
            return {
                ...recipe,
                ingredients: recipe.ingredients.map(ingredient => {
                    return { ...ingredient, ...ingredientsDb.getIngredient(ingredient.id) };
                })
            };
        })
    }

    private getRecipesDetails(): RecipeDetails[] {
        return [
            {
                id: 1,
                name: "Chicken curry",
                desc: "Classic indian style curry",
                ingredients: [
                    {
                        id: 1,
                        quantity: 50
                    },
                    {
                        id: 2,
                        quantity: 75,
                    },
                    {
                        id: 3,
                        quantity: 150,
                    },
                    {
                        id: 4,
                        quantity: 50,
                    },
                    {
                        id: 5,
                        quantity: 1,
                    },
                    {
                        id: 8,
                        quantity: 1,
                    },
                ],
            },
            {
                id: 2,
                name: "Salad",
                ingredients: [
                    {
                        id: 6,
                        quantity: 150,
                    },
                    {
                        id: 7,
                        quantity: 100,
                    }
                ],
            },
        ]
    }
};

const recipesDb = new RecipesDb();
export default recipesDb;