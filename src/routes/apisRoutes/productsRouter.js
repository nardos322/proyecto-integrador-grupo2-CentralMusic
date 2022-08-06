const express = require('express');
const router = express.Router();
const apiProductsController = require('../../controllers/apis/apiProductsController')

router.get('/', apiProductsController.all);
router.get('/:id', apiProductsController.one);


module.exports = router