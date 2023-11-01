import sqlite3 from "sqlite3";

const db = new sqlite3.Database(
  "database/dungeonsoup.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) console.error("Database connection error:", err.message);
  }
);

export default db;
