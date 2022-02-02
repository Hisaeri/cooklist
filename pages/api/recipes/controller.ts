import { NextApiRequest, NextApiResponse } from "next";
import recipesService from "./service";

class RecipesController {
    getRecipes(req: NextApiRequest, res: NextApiResponse) {
        try {
            const recipes = recipesService.getRecipes();
            res.status(200).json(recipes);
        } catch (e: unknown) {
            if (e instanceof Error) {
                res.status(500).json(e.message);
            }
        }
    };

    getRecipe(req: NextApiRequest, res: NextApiResponse) {
        try {
            const payload = this.getGetRecipePayload(req);
            const recipe = recipesService.getRecipe(payload.id);
            res.status(200).json(recipe);
        } catch (e: unknown) {
            if (e instanceof Error) {
                return this.handleGetRecipeError(res, e);
            }
            return res.status(500).json("Internal error\n");
        }
    };

    private handleGetRecipeError(res: NextApiResponse, e: Error) {
        switch (e.message) {
            case "NotFound":
                return res.status(404).send('RecipeNotFound\n');
            default:
                return res.status(500).json('Internal error\n');
        }
    }

    private getGetRecipePayload(req: NextApiRequest) {
        if (typeof req.query.id !== "string") {
            throw new Error("Incorrect id.\n");
        }
        const id = parseInt(req.query.id);
        return { id };
    }
}

const recipesController = new RecipesController();
export default recipesController;