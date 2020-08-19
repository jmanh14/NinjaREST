const express = require("express");
const router = express.Router();
const ninjas = require("../../Ninjas");

// GET all ninjas
router.get("/", (req, res) => res.json(ninjas));

// GET single ninja
router.get("/:id", (req, res) => {
  const found = ninjas.some((ninja) => ninja.id === parseInt(req.params.id));

  if (found) {
    res.json(ninjas.filter((ninja) => ninja.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No ninjas with the id of ${req.params.id}` });
  }
});
