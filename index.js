const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const AuthorRoter = require("./router/author.routes");
const BookRouter = require("./router/book.routes");
const citationRouter = require("./router/citation.routes");
const errorMiddlware = require("./middleware/error.middleware");
const AudioRouter = require("./router/audio.routes");
const cookieParser = require("cookie-parser");
const ProfileRouter = require("./router/profile.routes");
const electronRouter = require("./router/electron.routes");
const AuthRouter = require("./router/auth.routes");
const authorization = require("./middleware/autharation.middlware");
const YAML = require("yamljs");
const swagger = require("swagger-ui-express");
const PaperRouter = require("./router/paper.routes");
const FileRouter = require("./router/file.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

connectDB();

const docs = YAML.load("./docs/documentation.yml");

app.use("/api-docs",swagger.serve, swagger.setup(docs))
//router

app.use(AuthorRoter);
app.use(BookRouter);
app.use(citationRouter);
app.use(AudioRouter);
app.use(ProfileRouter);
app.use(electronRouter);
app.use(AuthRouter);
app.use(PaperRouter);
app.use(FileRouter);

//error middlware
app.use(errorMiddlware);

app.listen(PORT, () => {
  console.log("Server ishladi ", PORT);
});
