const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let history = [];

// Buscar histórico
app.get("/history", (req, res) => {
  res.json(history);
});

// Guardar resultado da partida
app.post("/history", (req, res) => {
  const game = req.body;

  history.push(game);

  res.status(201).json({
    message: "Partida guardada com sucesso",
    history,
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});