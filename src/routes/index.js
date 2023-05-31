import express from "express";
import { codeSuccess, logInfo } from "../utils";

// rutas
import authRouter from "./auth";
import categoryRouter from "./category";

// intancia de express y root router
const server = express();
const rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
  logInfo("ruta principal GET(api/)");
  res.status(codeSuccess).send({
    message: "Estas en la pagina principal",
  });
});

server.use("/", rootRouter);
server.use("/auth", authRouter);
server.use("/categories", categoryRouter);

export default server;
