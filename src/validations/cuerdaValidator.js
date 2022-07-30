const {check, body} = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

let cuerdaValidator = [
    check('nameProduct')
        .notEmpty().withMessage('Debe ingresar nombre del producto'),
    check('marca')
        .notEmpty().withMessage('Debe seleccionar una marca'),
    check('marca')
        .notEmpty().withMessage('Debe seleccionar una marca'),
    check('strings')
        .notEmpty().withMessage('Debe ingresar cantidad de cuerdas'),
    check('material')
        .notEmpty().withMessage('Debe ingresar tipo de material'),
    check('calibre')
        .notEmpty().withMessage('Debe ingresar calibre'),
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
]

module.exports = cuerdaValidator;