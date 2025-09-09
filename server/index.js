import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import hpp from "hpp";
import sanitizer from "perfect-express-sanitizer";
import { rateLimit } from "express-rate-limit";
import helmet from "helmet";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(helmet());
app.use(hpp());
const limiter = rateLimit({
  windowMs: 8 * 60 * 1000, // 8 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-8", // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});
app.use(limiter);
app.use(
  sanitizer.clean({
    xss: true,
    noSql: true,
    sql: true,
  })
);
const API_KEY = process.env.GOOGLE_API_KEY;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH", "HEAD"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "device-remember-token",
      "Access-Control-Allow-Origin",
      "Origin",
      "Accept",
    ],
  })
);

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

app.get("/api/videos", async (req, res) => {
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
