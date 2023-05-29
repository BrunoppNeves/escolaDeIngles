const db = require("../models");

module.exports = {
  //busca todas as pessoas
  async getAll(req, res) {
    try {
      const allPeople = await db.Pessoas.findAll();
      return res.status(200).json(allPeople);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
  //busca uma pessoa
  async getOne(req, res) {
    const { id } = req.params;
    try {
      const umaPessoa = await db.Pessoas.findOne({ where: { id: Number(id) } });
      return res.status(200).json(umaPessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
  //cria uma nova pessoa
  async criaPessoa(req, res) {
    const novaPessoa = req.body;
    try {
      const novaPessoaCriada = await db.Pessoas.create(novaPessoa);
      return res.status(201).json(novaPessoaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
  //atualiza um resgistro
  async atualizaPessoa(req, res) {
    const editaPessoa = req.body;
    const { id } = req.params;
    try {
      await db.Pessoas.update(editaPessoa, { where: { id: Number(id) } });
      const pessoaAtualizada = await db.Pessoas.findOne({ where: { id: Number(id) } });
      return res.status(200).json(pessoaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
  //deleta pessoa
  async deletaPessoa(req, res) {
    const { id } = req.params;
    try {
      await db.Pessoas.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ msg: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  //  ------------------------------------->  MATRICULAS  <-------------------------------------

  async pegaUmaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      const umaMatricula = await db.Matriculas.findOne({ where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } });
      return res.status(200).json(umaMatricula);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async criaMatricula(req, res) {
    const { estudanteId } = req.params;
    const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };
    try {
      const novaMatriculaCriada = await db.Matriculas.create(novaMatricula);
      return res.status(201).json(novaMatriculaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async atualizaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    const novasInfos = req.body;
    try {
      await db.Matriculas.update(novasInfos, { where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } });
      const matriculaAtualizada = await db.Matriculas.findOne({ where: { id: Number(matriculaId) } });
      return res.status(200).json(matriculaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async deletaMatricula(req, res) {
    const { id } = req.params;
    try {
      await db.Matriculas.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ msg: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
