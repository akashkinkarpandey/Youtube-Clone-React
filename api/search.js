// <project-root>/api/search.js
export  async function GET(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Missing query parameter" });
  }

  const url = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(
    q
  )}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Failed to fetch suggestions", details: err.message });
  }
}
