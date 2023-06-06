import mongoose from "mongoose";
import slugify from "slugify";

const toolsIntity = () => {
  const toolsSchema = new mongoose.Schema({
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
      type: Array,
      default: [],
    },
  });

  toolsSchema.pre("validate", function (next) {
    this.category_slug = slugify(this.category_name.toLowerCase());
    next();
  });

  return mongoose.models.Tools || mongoose.model("Tools", toolsSchema);
};

export const Tools = toolsIntity();
