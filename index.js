const express = require("express");
const path = require("path");
const ninjas = require("./Ninjas");

const app = express();

app.get("/", (req, res) =>
  res.render("index", {
    title: "Ninja App",
    ninjas,
  })
);

// app.use("/api/ninjas", require("./routes/api/ninjas"));

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
