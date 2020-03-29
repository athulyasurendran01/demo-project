const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* PRODUCTS COLLECTION MONGOOSE SCHEMA DEFINITION */
const ProductSchema = new Schema({
    name: { type: String, required: true },
    category_id: {type: Schema.Types.ObjectId, ref: 'Category', required: true},
    createdOn: Date
});
mongoose.model('Product', ProductSchema);

module.exports = mongoose.model('Product');
