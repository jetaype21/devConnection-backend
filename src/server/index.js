import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// imports
import rootRouter from "../routes";
import { logSuccess } from "../utils";

const server = express();
dotenv.config();

// middlewares
// Midlewares
server.use(express.json());
server.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// server.use(express.urlencoded({ extended: true, limit: "50mb" }));
// server.use(express.static("public"));

// ruta principal
server.use("/api", rootRouter);

// Moongosose conexion
mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on("connected", function () {
  logSuccess("Mongodb conexion exitosa.");
});

mongoose.connection.on("disconnected", function () {
  logSuccess("Mongodb conexion cerrado.");
});

mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error:")
);

// * redireccion
server.get("/", (req, res) => {
  res.redirect("/api");
});

export default server;
