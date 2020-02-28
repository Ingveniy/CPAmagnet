import { Schema } from "mongoose";
const autoIncrement = require("mongoose-auto-increment");
module.exports = function(db) {
  const schema = new Schema(
    {
      metaTitle: {
        type: String,
        default: "",
      },
      metaKeywords: {
        type: String,
        default: "",
      },
      metaDescription: {
        type: String,
        default: "",
      },
      content: {
        type: String,
        default: "",
      },
      title: {
        type: String,
        default: "",
      },
      previewImage: {
        type: String,
        default: "",
      },
      showInRSS: {
        type: Boolean,
        default: false,
      },
      seoUrl: {
        type: String,
        default: "",
      },
      sendNotification: {
        type: Boolean,
        default: false,
      },
      publishDate: {
        type: Date,
        default: Date.now(),
      },
      category: {
        type: Number,
        ref: "ArticleCategory",
      },
    },
    { id: false, strict: false, timestamps: true },
  );
  schema.plugin(autoIncrement.plugin, {
    model: "Article",
    id: "id",
    startAt: 1,
  });
  return db.model("Article", schema);
};
