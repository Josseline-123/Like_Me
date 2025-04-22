const pool = require("../conexion/db.js");

const consultarPosts = async () => {
    const {rows} = await pool.query("SELECT * FROM posts;");
    return rows;
 
 
 }
 
 const agregaPosts = async (titulo, img, descripcion, likes) => {
    const values = [titulo, img, descripcion, likes];
 const result = await pool.query("INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4);",
     values
 
 
 );
 
   return result.rowCount;
}

const modificarRegistros = async (id, likes) => {
   const query = "UPDATE posts SET likes = $1 WHERE id = $2";
   const result = await pool.query(query,[likes, id]);
   return result;
}

const borrarRegistros = async (id) => {
   const query = "DELETE FROM posts WHERE id = $1";
   const result = await pool.query(query, [id]);
   return result;
}



module.exports = { consultarPosts, agregaPosts, modificarRegistros, borrarRegistros }