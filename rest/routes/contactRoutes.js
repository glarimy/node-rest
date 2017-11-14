var app = require("express");
var router = app.Router();
var controller = require('../controllers/contactController');

router.get('/contact', controller.list);
router.post('/contact', controller.add);
router.get('/contact/:name', controller.find);

module.exports = router;