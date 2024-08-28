const mongoose = require('mongoose');


const db = (url) => {
    try {

        mongoose.connect(url)
            .then(() => console.log('Connected to DB'))
            .catch(err => console.log(err));

    } catch (error) {
        console.error(error);
    }
}

module.exports = db;