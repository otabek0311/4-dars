const { Schema, model } = require("mongoose");

const Author = new Schema(
  {
    full_name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
      trim: true,
    },

    birth_date: {
      type: Date,
      required: true,
    },

    death_date: {
      type: String,
      required: true,
      trim: true,
    },

    img: {
      type: String,
      required: true,
      match: /^https?:\/\/.+/,
    },

    bio: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 2000,
      trim: true,
    },

    creativity: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
      trim: true,
    },

    region: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
      trim: true,
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
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const AuthorSchema = model("Author", Author);
module.exports = AuthorSchema;
