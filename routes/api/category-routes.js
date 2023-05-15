const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryContent = await Category.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(categoryContent);
  } catch (error) {
    res.status(400).json(error);
  }
  
});

router.get('/:id', async (req, res) => {
  try {
    const categoryContent = await Category.findOne({
      where: {id:req.params.id},
      include:[{model:Product}]
    });
    if (!categoryContent) {
      return res.status()
    }
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
