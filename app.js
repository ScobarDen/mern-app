const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

const PORT = config.get('port') || 3000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'),{

        });
    } catch (err) {
        console.log('Server error: ' + err.toString());
        process.exit(1);
    }
}

start();


app.listen(PORT, () => console.log(`App has been started on port ${PORT} ...`));