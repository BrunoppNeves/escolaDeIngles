const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router
  .get("/pessoas", PessoaController.getAll)
  .get("/pessoas/:id", PessoaController.getOne)
  .post("/pessoas", PessoaController.criaPessoa)
  .put("/pessoas/:id", PessoaController.atualizaPessoa)
  .delete("/pessoas/:id", PessoaController.deletaPessoa)
  .get("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.pegaUmaMatricula)
  .post("/pessoas/:estudanteId/matricula", PessoaController.criaMatricula)
  .put("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.atualizaMatricula)
  .delete("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.deletaMatricula);

module.exports = router;
