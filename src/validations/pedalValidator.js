const {check, body} = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

let pedalValidator = [
    check('nameProduct')
        .notEmpty().withMessage('Debe ingresar nombre del producto')
        .isLength({min: 10}).withMessage('Minimo 10 caracteres').bail()
        .matches(/^(.|\s)*[a-zA-Z]+(.|\s)*$/).withMessage('Nombre no valido'),
    check('marca')
        .notEmpty().withMessage('Debe seleccionar una marca'),    
    check('vocal')
        .notEmpty().withMessage('Debe ingresar si es vocal o no')
        .matches(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/).withMessage('formato invalido'),
    check('efects')
        .notEmpty().withMessage('Debe ingresar cantidad de efectos')
        .matches(/^[0-9,$]*$/).withMessage('formato invalido'),
    check('price')
        .isNumeric().withMessage('Debe ser numeros')
        .notEmpty().withMessage('Debe ingresar precio'),    
    check('instruments')
        .notEmpty().withMessage('Debe ingresar instrumentos compatibles')
        .isLength({min: 4}).withMessage('Minimo 4 caracteres')
        .matches(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/).withMessage('formato invalido'),
    check('typeEfect')
        .notEmpty().withMessage('Debe ingresar tipo de efecto')
        .isLength({min: 4}).withMessage('Minimo 4 caracteres')
        .matches(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/).withMessage('formato invalido'),
    check('voltaje')
        .notEmpty().withMessage('Debe ingresar el voltaje')
        .isLength({min: 2}).withMessage('Minimo 2 caracteres')
        .matches(/^[A-Za-z0-9\s]+$/g).withMessage('formato invalido'),
    check('technology')
        .notEmpty().withMessage('Debe ingresar la tecnologia')
        .isLength({min: 5}).withMessage('Minimo 5 caracteres')
        .matches(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/).withMessage('formato invalido'),
    check('feeding')
        .notEmpty().withMessage('Debe ingresar alimentacion')
        .isLength({min: 5}).withMessage('Minimo 5 caracteres')
        .matches(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/).withMessage('formato invalido'),
    check('image')
        .custom((value, {req}) => {
            if(!(req.files.length > 0)){
                return Promise.reject('Imagenes requeridas')
            }
            return true;
        }),
       
    check('description')
        .notEmpty().withMessage('Debe ingresar una descripcion')
        .isLength({min: 5}).withMessage('Minimo 5 caracteres')
        .matches(/^(.|\s)*[a-zA-Z]+(.|\s)*$/).withMessage('formato invalido')             
]

module.exports = pedalValidator