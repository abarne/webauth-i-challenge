const router = require('express').Router();

const authRouter = require('./auth/auth-router.js');
const usersRouter = require('./users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

let bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
	res.json({ message: 'Server is working!' });
});

router.post('/hash', (req, res) => {
	const original = req.body.password;
	const credentials = req.body;
	const hash = bcrypt.hashSync(credentials.password, 14);
	credentials.password = hash;
	res.json({ originalPW: original, hashedPW: hash });
});

module.exports = router;
