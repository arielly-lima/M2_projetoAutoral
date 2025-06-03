const pool = require('../config/db');

//Criar habito
async function criarHabito({id_usuario, titulo, descricao, frequencia_por_semana}){
    const query = `INSERT INTO habitos (id_usuario, titulo, descricao, frequencia_por_semana) VALUES ($1, $2, $3, $4) RETURNING *`;
    const values = [id_usuario, titulo, descricao, frequencia_por_semana]
    const result = await pool.query(query, values);
    return result.rows [0];
}

//listar habitos
async function listarHabito({id_usuario, titulo, descricao, frequencia_por_semana}) {
    const result = await pool.query('SELECT * FROM tarefas_do_dia');
  return result.rows;
}

//Deletar habito
//Ver habito
//Editar habito


module.exports = {
  criarHabito,
};