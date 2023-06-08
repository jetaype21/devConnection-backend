import { Category } from "../models/Category";
import { codeErrorInternal, codeSuccess } from "../utils";

const categoryModel = Category;

export const createCategoriesOrm = async (categories) => {
  try {
    let data;
    let error;

    await categoryModel
      .create(categories)
      .then((categories) => (data = categories))
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
      error_message: `${error || "Ocurrio un error al crear categorias"}`,
    };
  }
};
