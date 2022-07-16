const {check, body} = require('express-validator');
const db = require('../database/models');

const profileValidator = [
check('name')
    .notEmpty().withMessage('Debes ingresar un nombre').bail()
    .isLength({ min: 2}).withMessage('ingrese un nombre valido')
    .matches(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/).withMessage('Ingrese un nombre valido'),
check('lastname')
    .notEmpty().withMessage('Debes ingresar tu apellido').bail()
    .isLength({ min: 2}).withMessage('ingrese un apellido valido')
    .matches(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/).withMessage('Ingrese un apellido valido'),

]

module.exports = profileValidator;