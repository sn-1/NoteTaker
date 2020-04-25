const express = require("express");
const compression = require("compression");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// port
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(compression());

app.use("/api", apiRoutes);

app.use("/", htmlRoutes);


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
