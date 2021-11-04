
const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan');
const cors = require('cors');
const formsController = require('./controllers/forms');

const app = express();
require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL);
const db = mongoose.connection;
db.on('connected', () => console.log('Connected to Mongo'));
db.on('error', () => console.log('Mongo Down'));


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/forms', formsController);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Express is listening on port: ${PORT}`)
});