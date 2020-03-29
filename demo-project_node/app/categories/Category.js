const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* CATEGORY COLLECTION MONGOOSE SCHEMA DEFINITION */
const CategorySchema = new Schema({
    category: { type: String, required: true },
    description: String
});
mongoose.model('Category', CategorySchema);

module.exports = mongoose.model('Category');