const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Temporary storage (we'll add database later)
let feedbacks = [];

app.post("/feedback", (req, res) => {
  const { content, url, pageTitle } = req.body;

  if (!content) {
    return res.status(400).json({ error: "Feedback content is required" });
  }

  feedbacks.push({
    content,
    url,
    pageTitle,
    createdAt: new Date(),
  });

  res.json({ message: "Feedback saved successfully ✅" });
});

app.get("/feedback", (req, res) => {
  res.json(feedbacks);
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
