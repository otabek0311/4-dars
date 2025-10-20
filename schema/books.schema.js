const { Schema, model } = require("mongoose");

const Book = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
      trim: true,
    },

    img: {
      type: String,
      required: true,
      match: /^https?:\/\/.+/,
    },

    period: {
      type: String,
      required: true,
      enum: ["O‘rta asr", "Uyg‘onish davri", "Zamonaviy", "Boshqa"],
    },

    genre: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
      trim: true,
    },

    published_year: {
      type: Number,
      required: true,
      min: 1000,
      max: new Date().getFullYear(),
    },

    page: {
      type: Number,
      required: true,
      min: 1,
    },

    published_home: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
      trim: true,
    },

    deck: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 1000,
      trim: true,
    },
    author_info: {
      type: Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const BookSchema = model("Book", Book);
module.exports = BookSchema;
