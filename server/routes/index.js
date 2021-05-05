const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send({ status: 'server system running' , timestamp: new Date }));

module.exports = router;