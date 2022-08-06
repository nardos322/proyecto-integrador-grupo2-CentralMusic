const {check, body} = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

let cuerdaValidator = [
    check('nameProduct')
        .notEmpty().withMessage('Debe ingresar nombre del producto')
        .isLength({min: 10}).withMessage('Minimo 10 caracteres')
        .matches(/^(.|\s)*[a-zA-Z]+(.|\s)*$/).withMessage('formato invalido'),
    check('marca')
        .notEmpty().withMessage('Debe seleccionar una marca'),
    check('strings')
        .notEmpty().withMessage('Debe ingresar cantidad de cuerdas')
        .isNumeric().withMessage('solo numeros'),
    check('material')
        .notEmpty().withMessage('Debe ingresar tipo de material')
        .isLength({min: 4}).withMessage('Minimo 4 caracteres')
        .matches(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/).withMessage('formato invalido'),
    check('calibre')
        .notEmpty().withMessage('Debe ingresar calibre')
        .isNumeric().withMessage('solo numeros'),
    check('price')
        .isNumeric().withMessage('Debe ser numeros')
        .notEmpty().withMessage('Debe ingresar precio'),
    check('image')
        .custom((value, {req}) => {
            if(!(req.files.length > 0)){
                return Promise.reject('Imagenes requeridas')
            }
            return true;
        }),
       
    check('description')
        .notEmpty().withMessage('Debe ingresar una descripcion')
        .isLength({min: 20}).withMessage('Minimo 20 caracteres')
        .matches(/^(.|\s)*[a-zA-Z]+(.|\s)*$/).withMessage('formato valido')      
]

module.exports = cuerdaValidator;