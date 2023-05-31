import mongoose from "mongoose";
import isBoolean from "validator/lib/isBoolean";

const toolEntity = () => {
  const toolSchema = new mongoose.Schema({
    tool_name: {
      type: String,
      required: true,
      minLength: 3,
    },
    tool_description: {
      type: String,
      required: true,
    },
    tool_status: {
      type: Boolean,
      default: true,
      validate: isBoolean,
    },
    tool_image: {
      type: String,
      minLength: 5,
      required: true,
    },
    tool_link: {
      type: String,
      minLength: 5,
      required: true,
    },
    tool_category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
    },
  });

  return mongoose.models.Tools || mongoose.model("Tools", toolSchema);
};

export const Tool = toolEntity();
