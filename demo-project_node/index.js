const port = process.env.PORT || 3000;
const express = require("express");
const app = express();
const db = require('./db');
global.__root   = __dirname + '/'; 

//API TEST
app.get('/', function (req, res) {
    res.status(200).send('API works.');
})

/** CATEGORY API CALLS */
const categoryCtrl = require(__root + 'app/categories/CategoryCtrl');
app.use('/api/category', categoryCtrl);

/** PRODUCTS API CALLS */
const productCtrl = require(__root + 'app/products/ProductCtrl');
app.use('/api/product', productCtrl);

/** NODE SERVER CONNETION */
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
