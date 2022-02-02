import { Ingredient } from "../../../types/ingredients";

class IngredientsDb {
    getIngredients(): Ingredient[] {
        return [
            {
                id: 1,
                "name": "Onion",
                "unitQuantity": 100
            },
            {
                id: 2,
                "name": "Potato",
                "unitQuantity": 150
            },
            {
                id: 3,
                "name": "Leek",
                "unitQuantity": 100
            },
            {
                id: 4,
                "name": "Garlic",
                "unitQuantity": 5,
                "unitName": "clove"
            },
            {
                id: 5,
                "name": "Chili",
                "desc": "Can sometimes be very spicy",
                "unitQuantity": 1
            },
            {
                id: 6,
                "name": "Salad",
                "unitQuantity": 200,
            },
            {
                id: 7,
                "name": "Tomato",
                "unitQuantity": 50
            },
            {
                id: 8,
                "name": "Love",
                "unitQuantity": 1,
                "unitName": "heart",
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