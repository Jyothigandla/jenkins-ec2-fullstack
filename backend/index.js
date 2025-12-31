const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Jenkins + EC2!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Backend running on ${PORT}`)
);

