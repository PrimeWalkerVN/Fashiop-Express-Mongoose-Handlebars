let express = require('express');
let router = express.Router();
let cartTask = require('../controllers/cartTask');
/* GET home page. */
router.get('/', cartTask.loadUserCart);

router.get('/update/:id',cartTask.updateCart);
module.exports = router;