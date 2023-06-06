import { Tools } from "../models/Tools";
import { codeErrorInternal, codeSuccess } from "../utils";

const toolsMode = Tools;

export const createToolsOrm = async (tools) => {
  try {
    let data;
    let error;

    await toolsMode
      .create(tools)
      .then((tools) => (data = tools))
      .catch((err) => {
        console.log("error; ", err);
        error = err;
      });

    if (error) {
      throw new Error(error?._message);
    }

    return {
      status_code: codeSuccess,
      data,
    };
  } catch (error) {
    console.log(error);
    return {
      status_code: codeErrorInternal,
      error_message: `${error || "Ocurrio un error al crear categorias"}`,
    };
  }
};

export const getToolsOrm = async () => {
  try {
    let data;
    let error;

    await toolsMode
      .find()
      .then((tools) => (data = tools))
      .catch((err) => {
        error = err;
      });

    if (error) {
      throw new Error(error?._message);
    }

    return {
      status_code: codeSuccess,
      data,
    };
  } catch (error) {
    return {
      status_code: codeErrorInternal,
      error_message: `${
        error || "Ocurrio un error al obtener las herramientas"
      }`,
    };
  }
};
