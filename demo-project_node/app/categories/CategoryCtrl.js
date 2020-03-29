const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const Category = require('./Category');

/*  CREATE NEW CATEGORY WITH PRODUCTS ARRAY
    Locat API: http://localhost:3000/api/category
    Method: POST
    Data: {
        name: category1,
        description: category1 desc
    }
    Exmple DB json: [{
        ObjectId: someCategoryId as categoryId,
        name: category1,
        description: category1 desc
    },
    {
        ObjectId: someCategoryId as categoryId,
        name: category1,
        description: category1 desc
    }]
*/
router.post('/', function (req, res) {
    const { category, description } = req.body;
    Category.create({
        category: category,
        description: description
    },
        function (err, result) {
            if (err) return res.status(500).send({ message: err });
            res.status(200).send(result);
        });
});


/*  FETCH CATEGORY WISE PRODUCT COUNT  
    Locat API: http://localhost:3000/api/category/productsCount
    Method: GET
    O/P:[
    {
        "_id": "5e80b9bf576fe71dc4eafdd6",
        "category": "food",
        "number_of_product": 1
    },
    {
        "_id": "5e80b9de576fe71dc4eafdd7",
        "category": "decoration",
        "number_of_product": 3
    }
]
*/
router.get('/productsCount', function (req, res) {
    Category.aggregate([
        {
            $lookup:
            {
                from: 'products',
                localField: "_id",
                foreignField: "category_id",
                as: 'products'
            }
        },
        {
            $project:
            {
                _id: 1,
                category: 1,
                number_of_product: { $size: "$products" }
            }
        }
    ],
        function (err, count) {
            if (err) return res.status(500).send({ message: err.message });
            if (!count) return res.status(404).send({ message: err.message });
            res.status(200).send(count);
        });
});

module.exports = router;