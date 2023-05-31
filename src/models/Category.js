import mongoose from "mongoose";
import slugify from "slugify";

const categoryIntity = () => {
  const categorySchema = new mongoose.Schema({
    category_name: {
      type: String,
      required: true,
      minLength: 3,
    },
    category_description: {
      type: String,
      required: true,
    },
    category_slug: {
      type: String,
      required: true,
    },
    category_tools: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Tools",
      default: [],
    },
  });

  categorySchema.pre("validate", function (next) {
    this.category_slug = slugify(this.category_name);
    next();
  });

  return (
    mongoose.models.Categorys || mongoose.model("Categories", categorySchema)
  );
};

export const Category = categoryIntity();
