const { Router } = require('express');
const { check } = require('express-validator');

const { usuarioPost } = require('../controllers/user.controller');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post(
    "/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("password", "La clave debe ser mayor a 6 caracteres").isLength({min:6}),
        check("correo", "El correo es obligatorio").isEmail(),
        /*check("correo").custom(validar ),
        check("role").custom(Validar role ),*/
        validarCampos,
    ], usuarioPost);

    module.exports = router;
