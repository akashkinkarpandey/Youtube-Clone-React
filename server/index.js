import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.get("/api/search", async (req, res) => {
  const q = req.query.q;
  if (!q) {
    return res.status(400).json({ error: "Missing query parameter" });
  }
  const url = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(
    q
  )}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch suggestions" });
  }
});
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
