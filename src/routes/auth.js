import express from "express";
import { codeSuccess, logInfo } from "../utils";
import authController from "../controllers/auth.controller";
import bodyParser from "body-parser";

const authRouter = express.Router();
const { createUser } = authController();
let jsonParser = bodyParser.json();

authRouter
  .route("/")
  .get((req, res) => {
    res.status(codeSuccess).send({
      message: "Estas en oauth",
    });
  })
  .post(jsonParser, async (req, res) => {
    const user = req?.body;

    const response = await createUser(user);
    return res.status(response.status_code || 200).send({ ...response });
  });

export default authRouter;
