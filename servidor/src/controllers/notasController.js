const db = require('../db');
const getAllNotas = (req, res) => {
  const sql = 'SELECT * FROM notas';
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error de la base de datos' });
    } else {
      res.json(results);
    }
  });
};

const insertNota = (req, res) => {
  const { titulo, contenido } = req.body;
  const sql = 'INSERT INTO notas (titulo, contenido, fecha) VALUES (?, ?, NOW())';
  db.query(sql, [titulo, contenido], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al insertar la nota en la base de datos' });
    } else {
      res.json({ message: 'Nota insertada correctamente' });
    }
  });
};
const editarNota = (req, res) => {
  const { id } = req.params;
  const { titulo, contenido } = req.body;
  const sql = 'UPDATE notas SET titulo = ?, contenido = ? WHERE id = ?';
  db.query(sql, [titulo, contenido, id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al editar la nota en la base de datos' });
    } else {
      res.json({ message: 'Nota editada correctamente' });
    }
  });
};
const borrarNota = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM notas WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al borrar la nota de la base de datos' });
    } else {
      res.json({ message: 'Nota eliminada correctamente' });
    }
  });
};
module.exports = {
  getAllNotas,
  insertNota,
  editarNota,
  borrarNota
};