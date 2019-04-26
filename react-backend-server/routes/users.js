var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
	const user = {
			name: 'Kaustubh',
			address: 'Dighi'
		};
	res.send('respond with a resource'+user);
});

router.use(express.json());

module.exports = router;