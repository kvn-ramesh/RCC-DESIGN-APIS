const express = require('express');
const app = express();
const dotenv = require('dotenv');

// Setting up config.env file variables
dotenv.config({path : './src/config/config.env'});

// Importing all routes
const jobs = require('./routes/jobs.Routes');
const beams = require('./routes/beam.Routes');

app.use('/api/v1',jobs);
app.use('/api/v1',beams);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});
