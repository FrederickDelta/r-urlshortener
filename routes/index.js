const express = require("express");
const router = express.Router();
const urlModel = require("../models/Url");

router.get("/:code", async (req, res) => {
  try {
    let urlObj = await urlModel.findOne({ code: req.params.code });

    if (urlObj) {
      res.redirect(urlObj.url);
    } else {
      res.status(404).json("No url found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
