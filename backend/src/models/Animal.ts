import {Schema, model} from 'mongoose';

interface IAnimal {
    name: string;
    age: number;
    hungerLevel: number;
    feed: () => void;
    makeSound: () => string;
}

const animalSchema = new Schema<IAnimal>({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    hungerLevel: {type: Number, required: true, default: 100},
});

const Animal = model<IAnimal>('Animal', animalSchema);

export default Animal;