import { Router, Request, Response } from 'express';
import { Animal } from '../models/Animal';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    const { name, species, age } = req.body;
    const newAnimal = new Animal({ name, species, age, hungerLevel: 50 });
    await newAnimal.save();
    res.json(newAnimal);
});

export default router;