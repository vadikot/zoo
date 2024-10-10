import {Schema, model} from 'mongoose';

export interface IAnimal {
    name: string;
    age: number;
    hungerLevel: number;
    feed: () => void;
    makeSound: () => string;
}

const animalSchema = new Schema<IAnimal>({
// const animalSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    hungerLevel: {type: Number, required: true, default: 100},
}, {discriminatorKey: 'type', timestamps: true});

animalSchema.methods.feed = function () {
    this.hungerLevel = Math.max(0, this.hungerLevel - 30); // todo add different food with different nutritional value

    return this.save();
}

const Animal = model<IAnimal>('Animal', animalSchema);

export default Animal;