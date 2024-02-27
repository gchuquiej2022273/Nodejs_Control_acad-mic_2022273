const { Router } = require('express');
const { check } = require('express-validator');

const { joinPost } = require('../controllers/join.controller');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post(
    "/",
    [
        check("nombreCurso", "El curso no puede ir vacia").not().isEmpty(),
        check("correo", "El correo es obligatorio").isEmail(),
        validarCampos,
    ], joinPost);

    module.exports = router;