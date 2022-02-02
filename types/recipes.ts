export type Recipe = {
    id: number;
    name: string;
    desc?: string;
    ingredients: RecipeIngredient[];
}

export type RecipeIngredient = {
    name: string;
    quantity: number;
}