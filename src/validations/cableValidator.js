const {check} = require('express-validator');

const cableValidator = [
    check('nameProduct')
        .notEmpty().withMessage('Debe ingresar nombre del producto')
        .isLength({min: 10}).withMessage('Minimo 10 caracteres')
        .matches(/^(.|\s)*[a-zA-Z]+(.|\s)*$/,).withMessage('formato invalido'),
    check('marca')
        .notEmpty().withMessage('Debe seleccionar una marca'),
    check('inputIn')
        .notEmpty().withMessage('Debe ingresar entrada')
        .isLength({min: 4}).withMessage('Minimo 4 caracteres')
        .matches(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/).withMessage('formato invalido'),
    check('inputOut')
        .notEmpty().withMessage('Debe ingresar salida')
        .isLength({min: 4}).withMessage('Minimo 4 caracteres')
        .matches(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/).withMessage('formato invalido'),
    check('large')
        .notEmpty().withMessage('Debe ingresar largo de cable')
        .matches(/^(.|\s)*[a-zA-Z]+(.|\s)*$/).withMessage('formato invalido'),
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
        .matches(/^(.|\s)*[a-zA-Z]+(.|\s)*$/).withMessage('formato invalido')      
];

module.exports = cableValidator;