import mongoose, { Schema, Model, SchemaDefinitionType } from 'mongoose';

export interface IAnimal {
    name: string;
    species: string;
    age: number;
    hungerLevel: number;
}


const AnimalSchema: Schema<SchemaDefinitionType<IAnimal>> = new Schema({
    name: { type: String, required: true },
    species: { type: String, required: true },
    age: { type: Number, required: true },
    hungerLevel: { type: Number, default: 50 }
});


export const Animal = mongoose.model('Animal', AnimalSchema) as Model<IAnimal>;