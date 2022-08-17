const express = require('express');
const router = express.Router();

const { updateUser } = require('../controllers/users/updateUser');

router.patch('/save-card/:id', updateUser);

module.exports = router;