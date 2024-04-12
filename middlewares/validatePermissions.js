const { SECRET } = require("../constant");
const knex = require("../knexfile");
const jwt = require("jsonwebtoken");
const TOKEN_SECRET = require("../constant").SECRET;

const validatePermission = async(req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) {
        return res.status(200).json({error: "Se requiere token"});
    }
    const userLogueado = jwt.decode(token, SECRET);
    
    const permisos = await knex("PERMISOS")
    .join("PERMISOS_PERFIL", "PERMISOS.id", "PERMISOS_PERFIL.id_permiso")
    .select("PERMISOS.nombre")
    .where("PERMISOS_PERFIL.id_perfil", tokenDesencriptado.idPerfil)
    .then((resultado) => {
        return resultado;
    });

    const tienePermisos = permisos.findIndex((x) => x.nombre === req.method);

    if (tienePermisos === -1) {
        return res.status(401).json({ error: "No posee permisos"});
    }

    req.user = userLogueado;

    next();
};

module.exports = {validatePermission};