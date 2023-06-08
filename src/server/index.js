import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// imports
import rootRouter from "../routes";
import { logSuccess } from "../utils";
import bodyParser from "body-parser";

const server = express();
dotenv.config();

// Midlewares
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(express.json());
server.use(express.static("public"));
server.use(cors());
// server.use(
//   cors({
//     origin: "http://192.168.43.25:3000/",
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true,
//   })
// );

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
