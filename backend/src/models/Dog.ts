import Animal, {IAnimal} from "./Animal";
import {Schema} from "mongoose";

export interface IDog extends IAnimal {
    breed: string;
}

const dogSchema = new Schema<IDog>({
    breed: {type: "string", required: true},
})

dogSchema.methods.makeSound = function () {
    return `${this.name} gives voice: Bark Bark!`;
}

export const Dog = Animal.discriminator<IDog>('Dog', dogSchema);