const { Schema, model } = require("mongoose");

const Electron = new Schema(
  {
    book_info: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Electron nomi majburiy"],
      trim: true,
      minlength: [2, "Electron nomi kamida 2 ta belgidan iborat bo‘lishi kerak"],
    },
    format: {
      type: String,
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

const ElectronSchema = model("ElectronBook", Electron);

module.exports = ElectronSchema
