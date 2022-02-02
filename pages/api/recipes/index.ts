import { NextApiRequest, NextApiResponse } from "next";
import recipesController from "./controller";

const recipesHandler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return recipesController.getRecipes(req, res);

    default:
      return res.status(405).end("Method not allowed.\n");
  }
}

export default recipesHandler;