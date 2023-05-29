const db = require("../models/index");

module.exports = {
  async pegaTodosOsNiveis(req, res) {
    try {
      const todosOsNiveis = await db.Niveis.findAll();
      return res.status(200).json(todosOsNiveis);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async pegaUmNivel(req, res) {
    const { id } = req.params;
    try {
      const pegaUm = await db.Niveis.findOne({ where: { id: Number(id) } });
      return res.status(200).json(pegaUm);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
  async criaNivel(req, res) {
    const nivel = req.body;
    try {
      const novoNivel = await db.Niveis.create(nivel);
      return res.status(201).json(novoNivel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async atualizaNivel(req, res) {
    const editaNivel = req.body;
    const { id } = req.params;
    try {
      await db.Niveis.update(editaNivel, { where: { id: Number(id) } });
      const nivelAtualizado = db.Niveis.findOne({ where: { id: Number(id) } });
      return res.status(200).json(nivelAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async apagaNivel(req, res) {
    const { id } = req.params;
    try {
      await db.Niveis.destroy({ where: { id: Number(id) } });
      return res.status(200).json(`id: ${id} deletado!`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
