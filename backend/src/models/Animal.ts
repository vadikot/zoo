import {Schema, model, Document, HydratedDocument} from 'mongoose';

export interface IAnimal extends Document {
    name: string;
    age: number;
    hungerLevel: number;
    feed: () => Promise<HydratedDocument<IAnimal>>;
    makeSound: () => string;
}

const animalSchema = new Schema<IAnimal>({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    hungerLevel: {type: Number, required: true, default: 100},
}, {discriminatorKey: 'type', timestamps: true});

animalSchema.methods.feed = function (this: IAnimal) {
    this.hungerLevel = Math.max(0, this.hungerLevel - 30); // todo add different food with different nutritional value
    return this.save();
};

const Animal = model('Animal', animalSchema);

export default Animal;