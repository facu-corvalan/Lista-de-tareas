const knex = require("../knexfile");

const update = async (req, res) => {
    const id = res.params.id;
    const {fecha, nombre, direccion } = req.body;

    const tarea = {
        fecha,
        nombre,
        direccion,
    };

    knex("TAREAS_REALIZAR")
    .where("id", "=", id)
    .update(tarea)
    .then(() => {
        res.status(200).json();
    })
    .catch((e) => {
        res.status(400).json({ error: e});
    });
};

const insert = async (req, res) => {
    const {fecha, nombre, direccion } = req.body;

    const tarea = {
        fecha,
        nombre,
        direccion,
    }
    await knex("TAREAS_REALIZAR")
    .returning([
        "fecha",
        "nombre",
        "direccion",
    ])
    .insert(tarea)
    .then(() => {
        res.status(201).json({result: "OK"});
    })
    .catch((e) => {
        res.status(400).json({error: e})
    });
};
module.exports = {insert, update}