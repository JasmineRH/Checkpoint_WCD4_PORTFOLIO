/*
require("dotenv").config();

const express = require("express");

const app = express();
const cors = require("cors");
const corsOptions = require("../config/corsConfig");

const connection = require("../db-config");

const port = 8001;

app.use(cors(corsOptions));
// middlewares (body se transforme en json)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Connexion à la BDD */
/*
connection.connect((err) => {
  if (err) {
    console.error("error connecting DB : ", err.stack);
  } else {
    console.log("DB connected as id ", connection.threadId);
  }
});

app.get("/", (req, res) => {
  res.send("Hello World !");
});

// Route pour les profils
app.get("/api/profile", (req, res) => {
  connection.query("SELECT * FROM profile", (err, result) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    res.json(result);
  });
});

app.get("/api/profile/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.sendStatus(422);
  }
  connection.query("SELECT * FROM profile WHERE id=?", [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    if (result.length === 0) {
      return res.sendStatus(404);
    }
    res.json(result[0]);
  });
});

app.post("/api/profile", (req, res) => {
  const { bio, linksocialmedia } = req.body;

  // Attention : ordre des éléments important (bio, link...)
  connection.query(
    "INSERT INTO profile (bio, linksocialmedia) VALUES (?, ?)",
    [bio, linksocialmedia],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
      const id = result.insertId;
      const newProfile = {
        bio,
        linksocialmedia,
      };
      res.status(201).json(newProfile);
    }
  );
});

app.put("/api/profile/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  connection.query(
    "UPDATE profile SET ? WHERE id=?",
    [req.body, id],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
      res.sendStatus(204);
    }
  );
});

app.delete("/api/profile/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  connection.query("DELETE FROM profile WHERE id=?", [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    res.sendStatus(204); // 204: pas d'éléments à renvoyer = tout est ok
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = app;
-- */
