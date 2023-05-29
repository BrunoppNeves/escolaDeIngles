const db = require("../models/index");

module.exports = {
  async pegaTodasAsTurmas(req, res) {
    try {
      const todasAsTurmas = await db.Turmas.findAll();
      return res.status(200).json(todasAsTurmas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async pegaUmaTurma(req, res) {
    const { id } = req.params;
    try {
      const umaTurma = db.Turmas.findOne({ where: { id: Number(id) } });
      return res.status(200).json(umaTurma);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async criaTurma(req, res) {
    const turma = req.body;
    try {
      const novaTurma = await db.Turmas.create(turma);
      return res.status(201).json(novaTurma);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async atualizaTurma(req, res) {
    const turmaAtualizada = req.body;
    const { id } = req.params;
    try {
      await db.Turmas.update(turmaAtualizada, { where: { id: Number(id) } });
      const turma = await db.Turmas.findOne({ where: { id: Number(id) } });
      return res.status(200).json(turma);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async apagaTurma(req, res) {
    const { id } = req.params;
    try {
      await db.Turmas.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ msg: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
