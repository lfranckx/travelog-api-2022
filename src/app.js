require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');

const app = express();
const morganOption = (NODE_ENV === 'production') ? 'tiny' : 'common';

const errorHandler = require('./errorHandler');

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.get()

app.get('/', (req, res) => {
    res.send('Hello Express');
});

app.use(errorHandler);