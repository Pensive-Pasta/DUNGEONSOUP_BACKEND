import express from "express";
import cors from "cors";

import articlesRoutes from "./routes/articles.js";
import authorsRoutes from "./routes/authors.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(articlesRoutes);
app.use(authorsRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the DungeonSoup API!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
