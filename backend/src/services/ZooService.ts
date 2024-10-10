import Cat from "../models/Cat";
import {Dog} from "../models/Dog";
import Animal, {IAnimal} from "../models/Animal";
import {HydratedDocument} from "mongoose";


class ZooService {

    async addAnimal(type: string, data: any): Promise<void> {
        if (type === 'Cat') {
            const cat = new Cat(data);

            await cat.save();
        } else if (type === 'Dog') {
            const dog = new Dog(data);

            dog.breed = 'test breed'; // todo temporary stopper: figure it on frontend

            await dog.save();
        } else {
            throw new Error('Invalid animal type');
        }
    }

    async getAllAnimals() {
        try {
            return Animal.find();
        } catch (e) {
            throw new Error('Could not fetch animals: ' + (e as Error).message);
        }
    }

    async getAnimalById(id: string) {
        try {
            return Animal.findById(id);
        } catch (e) {
            throw new Error('Could not find animal by ID: ' + (e as Error).message);
        }
    }

    async feedAnimal(id: string) {
        const animal: HydratedDocument<IAnimal> | null = await Animal.findById(id);

        if (!animal) {
            throw new Error('Animal not found');
        }

        try {
            await animal.feed();
        } catch (error) {
            throw new Error('feeding failed' + (error as Error).message);
        }
    }

    async removeAnimal(id: string) {
        try {
            await Animal.findByIdAndDelete(id);
        } catch (e) {
            throw new Error('Animal by ID not removed: ' + (e as Error).message);
        }
    }

    async makeSound(id: string): Promise<string> {
        const animal: HydratedDocument<IAnimal> | null = await Animal.findById(id);

        if (!animal) {
            throw new Error('Animal not found');
        }

        return animal.makeSound();
    }
}

export const zooService = new ZooService();