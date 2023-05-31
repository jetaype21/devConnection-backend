import { createUserOrm } from "../orm/auth.orm";
import { codeError, logInfo } from "../utils";

const authController = () => {
  const createUser = async (user) => {
    if (!user.user_email && !user.user_account_id)
      return {
        status_code: codeError,
        error_message: "Campos no cumplen requisitos",
      };

    return await createUserOrm(user);
  };

  return { createUser };
};

export default authController;
