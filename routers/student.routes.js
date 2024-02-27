const { Router } = require('express');
const { check } = require('express-validator');

const { studentPost } = require('../controllers/student.controller')

const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post(
    "/",
    [
        check("nameStudent", "EL nombre es obligatorio").notEmpty(),
        check("emailStudent", "EL email es obligatorio").isEmail(),
        check("password", "The password is mandatory").isLength({min:6}),
        validarCampos
    ],studentPost);

module.exports = router;