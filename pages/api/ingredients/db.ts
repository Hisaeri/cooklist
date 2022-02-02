import { Ingredient } from "../../../types/ingredients";

class IngredientsDb {
    getIngredients(): Ingredient[] {
        return [
            {
                id: 1,
                "name": "onion",
                "unitQuantity": 100
            },
            {
                id: 2,
                "name": "potato",
                "unitQuantity": 150
            },
            {
                id: 3,
                "name": "leek",
                "unitQuantity": 100
            },
            {
                id: 4,
                "name": "garlic",
                "unitQuantity": 5
            },
            {
                id: 5,
                "name": "chili pepper",
                "desc": "can sometimes be very spicy",
                "unitQuantity": 5
            }
        ];
    }

    getIngredient(id: number): Ingredient | undefined {
        return this.getIngredients().find((ingredient => { return ingredient.id === id }));
    }
};

const ingredientsDb = new IngredientsDb();
export default ingredientsDb;