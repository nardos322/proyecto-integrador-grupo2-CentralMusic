const {check, body} = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

let guitarValidator = [
    
    check('nameProduct')
        .notEmpty().withMessage('Debe ingresar nombre del producto').bail()
        .isLength({min: 10}).withMessage('Minimo 10 caracteres').bail()
        .matches(/^[A-Za-z0-9\s]+$/g).withMessage('Nombre no valido'),
    check('marca')
        .notEmpty().withMessage('Debe seleccionar una marca'),
    check('model')
        .notEmpty().withMessage('campo requerido')
        .matches(/^[A-Za-z0-9\s]+$/g).withMessage('formato no valido'),    
    check('line')
        .notEmpty().withMessage('Debe ingresar linea')
        .isLength({min: 5}).withMessage('minimo 5 caracteres')
        .matches(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/).withMessage('formato no valido'),
     check('hand')
        .notEmpty().withMessage('Debe ingresar la orientacion')
        .matches(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/).withMessage('formato no valido'),
    check('price')
        .isNumeric().withMessage('Debe ser numeros')
        .notEmpty().withMessage('Debe ingresar precio'),
    check('color')
        .notEmpty().withMessage('Debe ingresar color')
        .isLength({min: 3}).withMessage('Minimo 3 caracteres')
        .matches(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/).withMessage('formato no valido'),
    check('materialBody')
        .notEmpty().withMessage('Debe ingresar tipo de madera del cuerpo')
        .isLength({min: 5}).withMessage('Minimo 5 caracteres')
        .matches(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/).withMessage('formato no valido'),
    check('materialFretboard')
        .notEmpty().withMessage('Debe ingresar el material de diapason')
        .isLength({min: 5}).withMessage('Minimo 5 caracteres')
        .matches(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/).withMessage('formado no valido'),
    check('bodyFinish')
        .notEmpty().withMessage('Debe ingresar el acabado de la guitarra')
        .isLength({min: 5}).withMessage('Minimo 5 caracteres')
        .matches(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/).withMessage('formato no valido'),
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
        .matches(/^(.|\s)*[a-zA-Z]+(.|\s)*$/).withMessage('formato no valido')    
  

   
]

module.exports = guitarValidator;