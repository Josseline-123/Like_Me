const { consultarPosts, agregaPosts, modificarRegistros, borrarRegistros } = require("../models/postsModel.js");

const getAllPosts = async (req, res) => {
    const data = await consultarPosts();
    res.status(200).json(data);
}
 const createPosts = async (req, res) => {
    const {titulo, img, descripcion, likes } = req.body;
    const filasInsertadas = await agregaPosts(titulo, img, descripcion, likes);

    if (filasInsertadas > 0)
        res.status(201).json({ mensaje:"Registro insertado con éxito"});
    else
       res.status(400).send("Error en la operacion")
};


const updateRegistros = async (req, res) => {
    const {id} = req.params;
    const {likes} = req.query;
    const resultado = await modificarRegistros(id, likes);

    if (resultado.rowCount > 0)
        res.status(206).json({ mensaje:"Registro actualizado con éxito"});
    else
       res.status(400).send("No se actualizó nada");
};

const deleteRegistros = async (req, res) => {
    const { id } = req.params;
    try {
    const resultado = await borrarRegistros(id);

    if (resultado.rowCount > 0)
        res.status(206).json({ mensaje:"Registro borrado con éxito"});
    else
    res.status(400).json({mensaje:"No se borró nada"});
} catch (error){
       res.status(500).send(error);
  }
}

module.exports= { getAllPosts, createPosts, updateRegistros, deleteRegistros }