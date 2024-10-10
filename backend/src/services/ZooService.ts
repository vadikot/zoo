import Cat from "../models/Cat";
import {Dog} from "../models/Dog";
import Animal from "../models/Animal";



class ZooService {
    // add new animal
    async addAnimal(type: string, data: any): Promise<void> {
        if (type === 'Cat') {
            const cat = new Cat(data);
            await cat.save();
        } else if (type === 'Dog') {
            const dog = new Dog(data);
            await dog.save();
        } else {
            throw new Error('Invalid animal type');
        }
    }

    // get all animals
    async getAllAnimals() {
        return await Animal.find();
    }

    // get animal by id
    async getAnimalById(id: string) {
        return await Animal.findById(id);
    }

    // feed animal
    async feedAnimal(id: string) {
        const animal = await Animal.findById(id);
        if (!animal) {
            throw new Error('Animal not found');
        }
        await animal.feed();
    }

    // delete animal
    // async removeAnimal(id: string) {
    //     await Animal.findByIdAndRemove(id);
    // }

    // animal makes sound
    async makeSound(id: string): Promise<string> {
        const animal = await Animal.findById(id);
        if (!animal) {
            throw new Error('Animal not found');
        }
        return animal.makeSound();
    }
}

export const zooService = new ZooService();