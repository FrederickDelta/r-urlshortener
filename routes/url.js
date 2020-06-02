const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const shortid = require("shortid");
const urlModel = require("../models/Url");

router.post("/", async (req, res) => {
  try {
    const { url } = req.body;

    // Validate url
    if (!validUrl.isWebUri(url)) {
      res.status(401).json("Invalid url");
      return;
    }

    let urlObj = await urlModel.findOne({ url });

    if (urlObj) {
      res.json(urlObj);
      return;
    }

    let code = shortid.generate();
    urlObj = new urlModel({
      code,
      url,
    });
    await urlObj.save();
    res.json(urlObj);
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
