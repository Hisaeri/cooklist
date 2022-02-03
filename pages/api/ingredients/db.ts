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
                "unitQuantity": 150,
                "pluralUnitName": "potatoes"
            },
            {
                id: 3,
                "name": "leek",
                "unitQuantity": 100
            },
            {
                id: 4,
                "name": "garlic",
                "unitQuantity": 5,
                "unitName": "clove"
            },
            {
                id: 5,
                "name": "chili",
                "desc": "Can sometimes be very spicy",
                "unitQuantity": 1
            },
            {
                id: 6,
                "name": "salad",
                "unitQuantity": 200,
            },
            {
                id: 7,
                "name": "tomato",
                "unitQuantity": 50,
                "pluralUnitName": "tomatoes"
            }
        ];
    }

    getIngredient(id: number): Ingredient {
        const ingredient = this.getIngredients().find((ingredient => { return ingredient.id === id }));
        if (!ingredient) {
            throw new Error("IngredientNotFound");
        }
        return ingredient;
    }
};

const ingredientsDb = new IngredientsDb();
export default ingredientsDb;