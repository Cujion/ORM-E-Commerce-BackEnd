const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
router.get('/:id', (req, res) => {
  // be sure to include its associated Products
});

// create a new category
router.post('/', (req, res) => {

});

// update a category by its `id` value
router.put('/:id', (req, res) => {

});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {

});

module.exports = router;
