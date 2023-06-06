import jwt from "jsonwebtoken";

import dotenv from "dotenv";
import { codeError, codeErrorInternal } from "../utils";
dotenv.config();

const secretKey = process.env.SECRET_KEY || "MISECRETO";

export const verifyToken = (req, res, next) => {
  // comprobar token en request header (x-access-token)
  const token = req.headers["x-access-token"];

  // comprobar si existe token
  if (!token) {
    return res.status(codeError).send({
      message: "No tienes permisos para realizar esta acción.",
    });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(codeErrorInternal).send({
        message: "Ocurrio un error al validar el token.",
      });
    }

    next();
  });
};
