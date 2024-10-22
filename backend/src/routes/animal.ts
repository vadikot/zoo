import {Router, Request, Response} from 'express';
import Animal from "../models/Animal";
import {zooService} from "../services/ZooService";

const router = Router();

// get all animals
router.get('/', async (req, res) => {
    const animals = await zooService.getAllAnimals();
    res.json(animals);
});

// add new animal
router.post('/', async (req, res) => {
    const {type, data} = req.body;

    try {
        await zooService.addAnimal(type, data);
        res.status(201).send('Animal added');
    } catch (error) {
        res.status(400).send({error: error});
    }
});

// feed animal
router.post('/:id/feed', async (req, res) => {
    try {
        await zooService.feedAnimal(req.params.id);
        res.send('Animal fed');
    } catch (error) {
        res.status(404).send({error: (error as Error).message});
    }
});

// animal makes sound
router.get('/:id/sound', async (req, res) => {
    try {
        const sound = await zooService.makeSound(req.params.id);
        res.send(sound);
    } catch (error) {
        res.status(404).send({error: (error as Error).message});
    }
});

router.delete('/:id/remove', async (req, res) => {
    try {
        await zooService.removeAnimal(req.params.id);
        res.status(201).send('animal removed');
    } catch (error) {
        if ((error as Error).message === 'Animal not found') {
            res.status(404).send({error: (error as Error).message})
        } else {
            res.status(500).send({error: 'Internal Server Error'})
        }
    }
});

export default router;