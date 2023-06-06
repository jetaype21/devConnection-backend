import { User } from "../models/User";
import { codeErrorInternal, codeSuccess, logInfo } from "../utils";
import jwt from "jsonwebtoken";

let userModel = User;

export const createUserOrm = async (user) => {
  try {
    let data;
    let error;

    // validar si ya existe un usuario
    await userModel
      .findOne({ user_account_id: user.user_account_id })
      .then((user) => {
        data = user;
      });

    // si es nuevo creamos
    !data &&
      (await userModel
        .create(user)
        .then((user) => (data = user))
        .catch((err) => (error = err)));

    if (error) {
      throw new Error(error._message);
    }

    const { user_email } = data;
    // GENERAR jwt
    let token = jwt.sign(
      {
        email: user_email,
      },
      process.env.SECRET_KEY || "MISECRETO",
      {
        expiresIn: "7d",
      }
    );

    return {
      status_code: codeSuccess,
      user: data,
      token,
    };
  } catch (error) {
    return {
      status_code: codeErrorInternal,
      error_message: `${error || "Error internal al crear usuario"}`,
    };
  }
};
