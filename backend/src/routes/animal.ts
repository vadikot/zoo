import {Router, Request, Response} from 'express';
import Animal from "../models/Animal";

const router = Router();

router.post('/add', async (req: Request, res: Response) => {

    console.log("Received request to add animal:", req.body);
    const {name, age} = req.body;
    const newAnimal = new Animal({name, age});
    await newAnimal.save();
    res.json(newAnimal);
});

router.get('/get', async (req: Request, res: Response) => {
    try {
        const animals = await Animal.find();
        res.json(animals);
    } catch (error) {
        console.error('Error fetching animals:', error);
        res.status(500).json({message: 'Internal server error'});
    }
});

export default router;