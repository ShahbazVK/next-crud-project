const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/next-project')
            .then(() => console.log("connected to mongodb"))
    }
    catch (err) {
        console.log(err)
    }
}
module.exports = connectDB