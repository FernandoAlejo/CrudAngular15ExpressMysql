const express = require('express');
const notasController = require('../controllers/notasController');
const db = require("../db")
const router = express.Router();

router.get('/notas', notasController.getAllNotas);
router.post('/notas', notasController.insertNota);
router.put('/notas/:id', notasController.editarNota);
router.delete('/notas/:id', notasController.borrarNota);
module.exports = router;
