const Disaster = require('../models/Disaster');

// Add a new disaster
exports.addDisaster = async (req, res) => {
    try {
        const newDisaster = await Disaster.create(req.body);
        res.status(201).json(newDisaster);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all disasters
exports.getDisasters = async (req, res) => {
    try {
        const disasters = await Disaster.findAll();
        res.json(disasters);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
