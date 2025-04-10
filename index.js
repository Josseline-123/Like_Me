const express = require ("express");
const { consultarPosts, agregaPosts } = require("./controllers/consultas.js");
const app = express();
const cors = require("cors");

app.listen(3001, () => {
    console.log("Servidor levantado");
});

app.use(express.json());

app.use(cors());

app.get("/posts", async (req, res) => {
      const data = await consultarPosts();
      res.status(200).json(data);

});

app.post("/posts", async (req, res) => {
    const {titulo, img, descripcion, likes } = req.body;
    const filasInsertadas = await agregaPosts(titulo, img, descripcion, likes);

    if (filasInsertadas > 0)
        res.status(201).json({ mensaje:"Registro insertado con éxito"});
    else
       res.status(400).send("Error en la operacion")
});
