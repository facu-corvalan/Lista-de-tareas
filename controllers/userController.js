const knex = require("../knexfile");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = require("../constant").SECRET;

const register = async(req, res) => {
    let {username, password, idPerfil} = req.body;

    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    const usuario = {
        username: username,
        password: password,
        id_perfil: idPerfil,
    };

    await knex("USUARIOS")
    .returning(["username", "password", "id_perfil"])
    .insert(usuario)
    .then(() => {
        res.status(201).send("Se inserto correctamente");
    })
    .catch((e) => res.status(400).send(e));
};

const login = async(req, res) => {
    const {username, password} = req.body;

    const user = await knex
    .select('*')
    .from('USUARIOS')
    .where('USUARIOS.username', '=', usuarios)
    .then((result) => {
        return result[0];
    })
    .catch((e) => res.status(400).send(e));

    if (!user) {
        return res.status(200).send('El ususario ingresado no existe');
    }

    const validatePassword = await bcrypt.compare(password, user.password);
    if(!validatePassword) {
        return res.status(200).send("La contraseña es incorrecta");
    }

    const token = jwt.sign({
        username: username,
        idUser: user.id,
        idPerfil: user.id_perfil,
    }, SECRET
    );

    res.status(200).json({token: token});
};

module.exports = { register, login };