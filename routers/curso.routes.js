const { Router } = require('express');
const { check } = require('express-validator');

const { cursosPost, cursoDelete } = require('../controllers/courses.contoller');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post(
    "/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("profesor", "El profesor el obligatorio").not().isEmpty(),
        validarCampos,
    ], cursosPost);


router.delete(
    "/id",
    [
        check('_id', 'No se una id valida').isMongoId(),
        validarCampos
    ], cursoDelete);

module.exports = router;