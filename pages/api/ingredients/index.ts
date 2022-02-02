import { NextApiRequest, NextApiResponse } from "next";
import ingredientsController from "./controller";

const ingredientsHandler = (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case "GET":
            return ingredientsController.getIngredients(req, res);

        default:
            return res.status(405).end("Method not allowed.\n");
    }
}

export default ingredientsHandler;