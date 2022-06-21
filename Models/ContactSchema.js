const mongoose = require('mongoose');
const ContactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    massage: {
        type: String,
        required: true,
    }
});
module.exports = ContactSchema;