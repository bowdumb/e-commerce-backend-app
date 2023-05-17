const router = require('express').Router();
const { Category, Product } = require('../../models');
const { afterSync } = require('../../models/Product');

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const categoryContent = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categoryContent);
  } catch (error) {
    res.status(500).json(error);
  };
});
// find one category by its `id` value
// be sure to include its associated Products

router.get('/:id', async (req, res) => {
  try {
    const categoryContent = await Category.findOne({
      where: { id: req.params.id },
      include: [{ model: Product }]
    });
    if (!categoryContent) {
      return res.status(404).json({ message: 'Category cannot be found!' })
    }
    res.status(200).json(categoryContent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error!' })
  };
});
// create a new category
router.post('/', async (req, res) => {
  try {
    const categoryContent = await Category.create(req.body);
    res.status(200).json(categoryContent);
  } catch (error) {
    res.status(500).json(categoryContent);
  };
});
// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const categoryContent = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json(categoryContent);
  } catch (error) {
    res.json(error);
  }
});
// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryContent = await Category.destroy(
      {
        where: {
          id: req.params.id,
        }
      });
    res.json(categoryContent);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
