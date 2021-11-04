const express = require('express');
const router = express.Router();
const Form = require('../models/form');


router.get('/', async (req, res) => {
    try {
        const forms = await Form.find({})
        res.json(forms);
    } catch (error) {
        console.log(error);
        res.json({error: 'something went wrong'});
    }
});

router.post('/', async (req, res) => {
    try {
        await Form.create(req.body);
        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.status(400);
    }
});

router.get('/seed', async (req, res) => {
    try {
        await Form.deleteMany({});
        const forms = await Form.create([
            {shoe: 'Air Mags', name: 'Marty McFly', email: 'BackToTheFuture@gmail.com'},
        ]);
        res.json(forms);
    } catch (error) {
        console.log(error);
        res.json({error: 'something went wrong'});
    }
});

module.exports = router;