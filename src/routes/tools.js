import expres from "express";
import toolsController from "../controllers/tools.controller";

const toolsRouter = expres.Router();
const { createTools, getAllTools } = toolsController();

toolsRouter
  .route("/")
  .get(async (req, res) => {
    console.log("peticion get");
    const response = await getAllTools();

    console.log(response);

    return res.status(response.status_code || 200).json({ ...response });
  })
  .post(async (req, res) => {
    const response = await createTools(req?.body.tools);

    return res.status(response.status_code || 200).json({ ...response });
  });

export default toolsRouter;
