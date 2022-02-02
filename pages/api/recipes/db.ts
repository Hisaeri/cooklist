import { Recipe } from "../../../types/recipes";

class RecipesDb {
    getRecipes(): Recipe[] {
        return [
            {
                id: 1,
                name: "Chicken curry",
                ingredients: [
                    {
                        name: "onion",
                        quantity: 50,
                    },
                    {
                        name: "chicken",
                        quantity: 75,
                    },
                    {
                        name: "potato",
                        quantity: 150,
                    },
                    {
                        name: "leek",
                        quantity: 50,
                    },
                    {
                        name: "garlic",
                        quantity: 10,
                    },
                ],
            },
            {
                id: 2,
                name: "Salad",
                ingredients: [
                    {
                        name: "salad",
                        quantity: 150,
                    },
                    {
                        name: "tomato",
                        quantity: 100,
                    }
                ],
            },
        ];
    }

    getRecipe(id: number): Recipe | undefined {
        return this.getRecipes().find((recipe => { return recipe.id === id }));
    }
};

const recipesDb = new RecipesDb();
export default recipesDb;