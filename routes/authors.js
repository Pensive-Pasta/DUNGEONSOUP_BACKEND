import express from "express";
import db from "../database/db.js";

const router = express.Router();

router.get("/author/:authorId", (req, res) => {
  const authorId = req.params.authorId;
  const sql = "SELECT * FROM authors WHERE author_id = ?";
  db.get(sql, [authorId], (err, author) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(author);
  });
});

export default router;
