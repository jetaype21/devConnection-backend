import { createCategoriesOrm } from "../orm/categories.orm";
import { codeError } from "../utils";

const categoryController = () => {
  const createCategories = async (categories) => {
    if (categories?.length === 0)
      return {
        status_code: codeError,
        error_message: "La lista es vacia",
      };

    return await createCategoriesOrm(categories);
  };

  return { createCategories };
};

export default categoryController;
