const express = require("express")
const router = express.Router();
const sondageCtrl = require('../controlors/sondageCtrl')

router.post('/', sondageCtrl.createSondages);
router.get('/', sondageCtrl.getSondages);
router.put('/:ids', sondageCtrl.voter);

module.exports = router