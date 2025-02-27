import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());

app.use(
  "/api",
  createProxyMiddleware({
    target:
      "https://www.giantbomb.com/api/games/?api_key=f8f7372606436fc818a47bc2ef4fc6e5ca81cb45",
    changeOrigin: true,
    pathRewrite: {
      "^/api": "", // remove /api prefix when forwarding to target
    },
  })
);

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
