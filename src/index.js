require("dotenv").config();

const mongoose = require("mongoose");

const app = require("./app");
const { PORT, URI } = require("./config");

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connect");
    app.listen(PORT, () => console.log(`API run on PORT ${PORT}`));
  })
  .catch((error) => {
    console.log("DB not connect:", error);
  });
