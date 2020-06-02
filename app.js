const express = require("express");
const connectDB = require("./config/db");
const config = require("config");
const port = config.get("port");

// Connect to database
connectDB();

const app = express();
app.use(express.json({ extented: false }));

// Define routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
