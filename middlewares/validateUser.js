const joi = require("joi");

const formRegisterUser = joi.object({
    username: joi.string().required(),
    password: joi.string().required(),
    idPerfil: joi.number().min(1).max(2).required(),
});

const userFormLogins = joi.object({
    username: joi.string().required(),
    password: joi.string().required(),
});

const validateFormRegisterUser = (req, res, next) => {
    const {error, value} = formRegisterUser.validate(req.body);

    if (error) {
        return res.status(400).send("Campos Invalidos");
    }
}

const validateUserFromLogin = (req, res, next) => {
    if (error) {
        return res.status(400).send({ error: "campos invalidos"});
    }

    next();
};

module.exports = { validateFormRegisterUser, validateUserFromLogin };