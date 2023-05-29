"use strict";
module.exports = (sequelize, DataTypes) => {
  const Nivel = sequelize.define(
    "Niveis",
    {
      descr_nivel: DataTypes.STRING,
    },
    { paranoid: true }
  );

  Nivel.associate = (models) => {
    Nivel.hasMany(models.Turmas, {
      foreignKey: "nivel_id",
    });
  };
  return Nivel;
};
