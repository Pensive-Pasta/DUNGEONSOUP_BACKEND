import express from "express";
import db from "../database/db.js";

const router = express.Router();

const handleError = (res, err) => {
  res.status(500).json({ error: err.message });
  return;
};

router.get("/articles", (req, res) => {
  const sql = "SELECT * FROM articles";
  db.all(sql, [], (err, articles) => {
    if (err) {
      handleError(res, err);
    }
    res.json(articles);
  });
});

router.get("/articles/search/:searchTerm", (req, res) => {
  const searchTerm = `%${req.params.searchTerm}%`;
  const sql = "SELECT * FROM articles WHERE title LIKE ?";
  db.all(sql, [searchTerm], (err, articles) => {
    if (err) {
      handleError(res, err);
    }
    res.json(articles);
  });
});

router.get("/articles/:articleId", (req, res) => {
  const articleId = req.params.articleId;
  const sql = "SELECT * FROM ARTICLES WHERE article_id = ?";
  db.all(sql, [articleId], (err, article) => {
    if (err) {
      handleError(res, err);
    }
    res.json(article);
  });
});

router.get("/articles/author/:authorId", (req, res) => {
  const authorId = req.params.authorId;
  const sql = "SELECT * FROM articles WHERE author_id = ?";
  db.all(sql, [authorId], (err, articles) => {
    if (err) {
      handleError(res, err);
    }
    res.json(articles);
  });
});

router.post("/articles/:articleId/like", (req, res) => {
  const articleId = req.params.articleId;
  const sql = "UPDATE articles SET likes = likes + 1 WHERE article_id = ?";
  db.run(sql, [articleId], function (err) {
    if (err) {
      handleError(res, err);
      return;
    }
    res.json({
      message: "Like count updated successfully",
    });
  });
});

router.post("/articles/:articleId/dislike", (req, res) => {
  const articleId = req.params.articleId;
  const sql = "UPDATE articles SET likes = likes - 1 WHERE article_id = ?";
  db.run(sql, [articleId], function (err) {
    if (err) {
      handleError(res, err);
      return;
    }
    res.json({
      message: "Like count updated successfully",
    });
  });
});
export default router;
