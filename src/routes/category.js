import express from "express";
import categoryController from "../controllers/category.controller";

const categoryRouter = express.Router();
const { createCategories } = categoryController();

categoryRouter
  .route("/")

  .get((req, res) => {
    res.send({ message: "estas en categorias" });
  })
  .post(async (req, res) => {
    const categories = req?.body.categories;

    const response = await createCategories(categories);

    return res.status(response.status_code || 200).send({ ...response });
  });

export default categoryRouter;
