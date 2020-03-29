const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const Product = require('./Product');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

/* CREATE PRODUCT API CALL
Locat API: http://localhost:3000/api/product
Method: POST
Data: {
    name: "Test 1",
    category_id: someCatId1,
    createdOn: Today
}
Exmple DB json: {
    products: [{
        ObjectId: someproductId,
        name: "Test 1",
        category_id: someCatId1,
        createdOn: Today
    },
    {
        ObjectId: someproductId,
        name: "Test 1",
        category_id: someCatId1,
        createdOn: Today
    }]
}
*/
router.post('/', function (req, res) {
    const { name, category_id } = req.body;
    Product.create({
        name: name,
        category_id: ObjectId(category_id),
        createdOn: Date.now()
    },
        function (err, product) {
            if (err) return res.status(500).send({ message: err.message });
            res.status(200).send(product);
        });
});

module.exports = router;