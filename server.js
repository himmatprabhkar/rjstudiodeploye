require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const db = require("./src/config/database");

const apiRoutes = require("./src/routes/authRoutes/authRoutes");
const apiFrameSize = require("./src/routes/ImageSizesRoute/ImageSizesRoute");
const apiMotifBorder = require("./src/routes/MotifBorderRoute/MotifBorderRoute");
const orderRoutes = require("./src/routes/OrdersRoute/OrdersRoute");
const userDetails = require("./src/routes/UserRoute/UserRoute");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.get("/", (req, res) => {
  console.log("this is hitting");
  res.send("This is rooot");
});

app.use("/api", apiRoutes);
app.use("/api", apiFrameSize);
app.use("/api", apiMotifBorder);
app.use("/api", orderRoutes);
app.use("/api", userDetails);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
