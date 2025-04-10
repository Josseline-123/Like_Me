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

module.exports ={ consultarPosts, agregaPosts }