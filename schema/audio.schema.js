const { Schema, model } = require("mongoose");

const Audio = new Schema(
  {
    book_info: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Audio nomi majburiy"],
      trim: true,
      minlength: [2, "Audio nomi kamida 2 ta belgidan iborat bo‘lishi kerak"],
    },
    duration: {
      type: Number,
      min: 1,
      required: true,
    },
    url: {
       type: String,
       required: true,
    }
  },
  {
    timestamps: true,
  }
);

const AudioSchema = model("AudioBook", Audio);

module.exports = AudioSchema
