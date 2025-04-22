const express = require ("express");
const app = express();
const cors = require("cors");
const routesPosts = require("./routes/postsRoutes.js")

app.listen(3001, () => {
    console.log("Servidor levantado");
});

app.use(express.json());

app.use(cors());

app.use("/posts", routesPosts);

