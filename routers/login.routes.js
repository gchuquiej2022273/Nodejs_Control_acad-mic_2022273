const { Router } = require('express');
const { check } = require('express-validator');

const { login } = require('../controllers/login.controller');

const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

router.post(
    "/login",
    [
        check('correo', 'Este es un campo obligatorio').isEmail(),
        check('password', 'La clave es obligatoria').not().isEmpty(),
        validarCampos
    ], login);

module.exports = router;