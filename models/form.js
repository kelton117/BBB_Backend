const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
    shoe: {type: String},
    name: {type: String},
    email: {type: String},
    number: {type: String},
});

module.exports = mongoose.model('Form', formSchema);

