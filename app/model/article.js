const { default: mongoose } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const articleSchema = new mongoose.Schema(
  {
    title: { type: String },
    autor: { type: String },
    body: { type: String },
    tags: { type: String },
  },
  { timestamps: true }
);
articleSchema.plugin(mongoosePaginate);

module.exports = {
  articleModel: mongoose.model("article", articleSchema),
};
