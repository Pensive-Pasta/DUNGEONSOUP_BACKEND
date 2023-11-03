import express from "express";
import db from "../database/db.js";

const router = express.Router();

router.get("/articles", (req, res) => {
  const sql = "SELECT * FROM articles";
  db.all(sql, [], (err, articles) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(articles);
  });
});

router.get("/articles/:articleId", (req, res) => {
  const articleId = req.params.articleId;
  const sql = "SELECT * FROM ARTICLES WHERE article_id = ?";
  db.all(sql, [articleId], (err, article) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(article);
  });
});

router.get("/articles/author/:authorId", (req, res) => {
  const authorId = req.params.authorId;
  const sql = "SELECT * FROM articles WHERE author_id = ?";
  db.all(sql, [authorId], (err, articles) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(articles);
  });
});

export default router;
