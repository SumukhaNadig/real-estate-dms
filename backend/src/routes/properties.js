const express = require('express');
const { body, validationResult } = require('express-validator');
const Property = require('../models/Property');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: "Property not found" });
        }
        res.json(property);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', [auth, [
    body('title').not().isEmpty().withMessage('Title is required'),
    body('description').isLength({ min: 10 }).withMessage('Description must be at least 10 characters long'),
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const property = new Property(req.body);
    try {
        const newProperty = await property.save();
        res.status(201).json(newProperty);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
