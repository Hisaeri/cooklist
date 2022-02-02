import { NextApiRequest, NextApiResponse } from "next";
import ingredientsService from "./service";

class IngredientsController {
    getIngredients(req: NextApiRequest, res: NextApiResponse) {
        try {
            const ingredients = ingredientsService.getIngredients();
            res.status(200).json(ingredients);
        } catch (e: unknown) {
            if (e instanceof Error) {
                res.status(500).json(e.message);
            }
        }
    };

    getIngredient(req: NextApiRequest, res: NextApiResponse) {
        try {
            const payload = this.getGetIngredientPayload(req);
            const ingredient = ingredientsService.getIngredient(payload.id);
            res.status(200).json(ingredient);
        } catch (e: unknown) {
            if (e instanceof Error) {
                return this.handleGetIngredientError(res, e);
            }
            return res.status(500).json("Internal error\n");
        }
    };

    private handleGetIngredientError(res: NextApiResponse, e: Error) {
        switch (e.message) {
            case "NotFound":
                return res.status(404).send('IngredientNotFound\n');

            default:
                return res.status(500).json('Internal error\n');
        }
    }

    private getGetIngredientPayload(req: NextApiRequest) {
        if (typeof req.query.id !== "string") {
            throw new Error("Incorrect id.\n");
        }
        const id = parseInt(req.query.id);
        return { id };
    }
}

const ingredientsController = new IngredientsController();
export default ingredientsController;