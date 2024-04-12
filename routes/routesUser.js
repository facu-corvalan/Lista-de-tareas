const express = require("express");
const router = express.Router();
const controllerUser = require("../controllers/userController");
const mdlw = require("../middlewares/validateUser");

router.post("/users", mdlw.validateFormRegisterUser, controllerUser.register);
router.get("/users", mdlw.validateUserFromLogin ,controllerUser.login)

module.exports = router;