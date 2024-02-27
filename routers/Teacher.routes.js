const { Router } = require('express');
const { check } = require('express-validator');

const { usuarioPost , deletePerfil} = require('../controllers/teacher.controller');
const { validarCampos } = require('../middlewares/validar-campos');

const { existenteEmail } = require('../helpers/db_validator'); 

const router = Router();

router.post(
    "/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("password", "La clave debe ser mayor a 6 caracteres").isLength({min:6}),
        check("correo", "El correo es obligatorio").isEmail(),
        check("correo").custom(existenteEmail),
        validarCampos,
    ], usuarioPost);

router.delete(
    "/id",
    [
        check('_id','No es un id valido').isMongoId,
        validarCampos
    ],deletePerfil);

    module.exports = router;