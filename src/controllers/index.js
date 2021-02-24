const { propiedades } = require("../../edificaciones.json");
const { generate } = require("shortid");

const getController = (req, res) => {
  if (propiedades.length === 0) {
    return res.status(204).json();
  }
  res
    .status(200)
    .json({ data: propiedades, totalEdificaciones: propiedades.length });
};
const getByIdController = (req, res) => {
  let { id } = req.params;
  const propiedad = propiedades.find((propiedad) => propiedad.id === id);
  if (!propiedad) {
    return res.status(404).json("Edificación no encontrada");
  }
  res.status(200).json(propiedad);
};

const postController = (req, res) => {
  const {
    edificacion,
    ancho,
    largo,
    alto,
    materiales,
    habitaciones,
    apartamentos,
    atracciones,
  } = req.body;
  const nuevaEdificacion = {
    id: generate(),
    edificacion,
    ancho,
    largo,
    alto,
    materiales,
    habitaciones,
    apartamentos,
    atracciones,
  };
  propiedades.push(nuevaEdificacion);
  res.status(201).json({ msg: "Edificación creada", data: propiedades });
};

const deleteController = (req, res) => {
  const { id } = req.params;
  propiedades.forEach((propiedad, i) => {
    if (propiedad.id === id) {
      propiedades.splice(i, 1);
      res.json({ msg: "Edificación destruida", data: propiedades });
    }
  });
};

const putController = (req, res) => {
  const { id } = req.params;
  const {
    edificacion,
    ancho,
    largo,
    alto,
    materiales,
    habitaciones,
    apartamentos,
    atracciones,
  } = req.body;
  propiedades.forEach((propiedad) => {
    if (propiedad.id === id) {
      propiedad.edificacion = edificacion;
      propiedad.ancho = ancho;
      propiedad.largo = largo;
      propiedad.alto = alto;
      propiedad.materiales = materiales;
      propiedad.habitaciones = habitaciones;
      propiedad.apartamentos = apartamentos;
      propiedad.atracciones = atracciones;
    }
  });
  res.status(201).json("Edificación modificada");
};

module.exports = {
  getController,
  postController,
  getByIdController,
  deleteController,
  putController,
};
