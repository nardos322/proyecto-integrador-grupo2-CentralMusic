const express = require('express');
const router = express.Router();
const { all, one } = require('../../controllers/apis/apiUsersController')

router.get('/', all)
router.get('/:id', one)

module.exports = router