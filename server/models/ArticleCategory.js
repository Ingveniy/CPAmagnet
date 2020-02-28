import { Schema } from "mongoose";
const autoIncrement = require("mongoose-auto-increment");
module.exports = function(db) {
  const schema = new Schema(
    {
      description: {
        type: String,
        default: "",
      },
      title: {
        type: String,
        default: "",
      },
    },
    { id: false, strict: false, timestamps: false },
  );
  schema.plugin(autoIncrement.plugin, {
    model: "ArticleCategory",
    id: "id",
    startAt: 1,
  });
  return db.model("ArticleCategory", schema);
};
