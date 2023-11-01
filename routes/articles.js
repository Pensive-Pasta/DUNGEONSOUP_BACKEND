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
