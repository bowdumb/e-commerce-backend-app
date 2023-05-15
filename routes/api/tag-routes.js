const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// find all tags
// be sure to include its associated Product data
router.get('/', async (req, res) => {
  try {
    const tagContent = await Tag.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(tagContent);
  } catch (error) {
    res.status(500).json(error);
  };
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tagContent = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!tagContent) {
      return res.status(404).json({ message: 'Tag cannot be found!' });
    }
    res.status(200).json(tagContent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error!' });
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    const tagContent = await Tag.create(req.body);
    res.status(200).json(tagContent);
  } catch (error) {
    res.status(500).json(error);
  };
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagContent = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json(tagContent);
  } catch (error) {
    res.json(error);
  }
});
 // delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagContent = await Tag.destroy(
      {
        where: {
          id: req.params.id,
        }
      });
    res.json(tagContent);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
