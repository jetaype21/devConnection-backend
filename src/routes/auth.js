import express from "express";
import { codeSuccess, logInfo } from "../utils";
import authController from "../controllers/auth.controller";

const authRouter = express.Router();
const { createUser } = authController();

authRouter
  .route("/")
  .get((req, res) => {
    res.status(codeSuccess).send({
      message: "Estas en oauth",
    });
  })
  .post(async (req, res) => {
    // console.log(req.body);
    const user = req?.body;

    const response = await createUser(user);
    return res.status(response.status_code || 200).send({ ...response });
  });

export default authRouter;
