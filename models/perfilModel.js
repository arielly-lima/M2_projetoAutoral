const pool = require('../config/db')

async function infoPerfil(id_usuario){
    const query = `SELECT FROM usuario WHERE id_usuario = $1`;
    const result = await pool.query(query, [id_usuario]);
    return result.rows;
}

module.exports = {
    infoPerfil
};