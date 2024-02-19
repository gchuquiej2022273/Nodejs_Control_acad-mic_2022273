const { Router } = require('express');
const { check } = require('express-validator');

const { joinPost } = require('../controllers/join.controller');
const { validarCampos } = require('../middlewares/validar-campos');
const { cursoDelete } = require('../controllers/courses.contoller');

const router = Router();

router.post(
    "/",
    [
        check("nombre", "El uid no puede ir vacia").not().isEmpty(),
        check("estudiantes", "El estudiante ir vacia").not().isEmpty(),
        validarCampos,
    ], joinPost);

    module.exports = router;