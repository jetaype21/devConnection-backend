import { createToolsOrm, getToolsOrm } from "../orm/tools.orm";
import { codeError } from "../utils";

const toolsController = () => {
  const createTools = async (tools) => {
    if (tools?.length === 0)
      return {
        status_code: codeError,
        error_message: "La lista es vacia",
      };

    return await createToolsOrm(tools);
  };

  const getAllTools = async () => {
    return await getToolsOrm();
  };

  return { createTools, getAllTools };
};

export default toolsController;
