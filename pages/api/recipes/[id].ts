import { NextApiRequest, NextApiResponse } from "next";
import recipesController from "./controller";

const recipeHandler = (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case "GET":
            return recipesController.getRecipe(req, res);

        default:
            return res.status(405).end("Method not allowed.\n");
    }
}

export default recipeHandler;