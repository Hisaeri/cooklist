import { Ingredient } from "./ingredients";

export type RecipeIngredientDetails = {
    id: number;
    quantity: number;
}

export type RecipeDetails = {
    id: number;
    name: string;
    desc?: string;
    ingredients: RecipeIngredientDetails[];
}

export type RecipeIngredient = RecipeIngredientDetails & Ingredient;

export type Recipe = RecipeDetails & {
    ingredients: RecipeIngredient[];
}