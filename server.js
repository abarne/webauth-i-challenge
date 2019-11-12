const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const apiRouter = require('./api-router.js');
const configureMiddleware = require('./configure-middleware.js');

const server = express();

const sessionConfiguration = {
	name: 'sessionConfig',
	secret: process.env.COOKIE_SECRET || `let's keep it secret`,
	cookie: {
		maxAge: 1000 * 60 * 60,
		secure: process.env.NODE_ENV === 'production' ? true : false,
		httpOnly: true
	},
	resave: false,
	saveUninitialized: true
};

configureMiddleware(server);

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfiguration));
server.use('/api', apiRouter);

module.exports = server;
