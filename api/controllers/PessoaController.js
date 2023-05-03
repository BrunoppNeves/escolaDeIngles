const db = require("../models");

class PessoaController {
  //busca todas as pessoas
  static async getAll(req, res) {
    try {
      const allPeople = await db.Pessoas.findAll();
      return res.status(200).json(allPeople);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  //busca uma pessoa
  static async getOne(req, res) {
    const { id } = req.params;
    try {
      const umaPessoa = await db.Pessoas.findOne({ where: { id: Number(id) } });
      return res.status(200).json(umaPessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  //cria uma nova pessoa
  static async criaPessoa(req, res) {
    const novaPessoa = req.body;
    try {
      const novaPessoaCriada = await db.Pessoas.create(novaPessoa);
      return res.status(201).json(novaPessoaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  //atualiza um resgistro
  static async atualizaPessoa(req, res) {
    const editaPessoa = req.body;
    const { id } = req.params;
    try {
      await db.Pessoas.update(editaPessoa, { where: { id: Number(id) } });
      const pessoaAtualizada = await db.Pessoas.findOne({ where: { id: Number(id) } });
      return res.status(200).json(pessoaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  //deleta pessoa
  static async deletaPessoa(req, res) {
    const { id } = req.params;
    try {
      await db.Pessoas.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ msg: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
