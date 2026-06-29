const express = require("express");
const app = express();
app.use(express.json());

let notes = [
  { id: 1, text: "Welcome to your AKS notes app" }
];

app.get("/notes", (req, res) => res.json(notes));

app.post("/notes", (req, res) => {
  const note = { id: Date.now(), text: req.body.text || "" };
  notes.push(note);
  res.json(note);
});

app.put("/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find(n => n.id === id);
  if (!note) return res.status(404).end();
  note.text = req.body.text;
  res.json(note);
});

app.listen(3000, () => console.log("notes backend running"));
