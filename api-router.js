const router = require('express').Router();

router.get('/', (req, res) => {
	res.json({ message: 'Server is working!' });
});

module.exports = router;
