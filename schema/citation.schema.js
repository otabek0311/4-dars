const { required } = require("joi");
const { Schema, model } = require("mongoose");

const Citation = new Schema(
  {
    text: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
      trim: true,
    },
    book_id:{
        type: Schema.Types.ObjectId,
        ref:"Book",
        required:true
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const CitationSchema = model("Citation", Citation);
module.exports = CitationSchema;
