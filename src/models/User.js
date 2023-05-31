import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail";

const userEntity = () => {
  let userSchema = new mongoose.Schema({
    user_email: {
      type: String,
      required: true,
      validate: isEmail,
    },
    user_account_id: {
      type: String,
      required: true,
    },
    user_favorites: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Tools",
      default: [],
    },
  });

  return mongoose.models.Users || mongoose.model("Users", userSchema);
};

export const User = userEntity();
