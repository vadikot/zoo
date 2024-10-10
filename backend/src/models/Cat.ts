import Animal, {IAnimal} from "./Animal";
import {Schema} from "mongoose";

export interface ICat extends IAnimal {
    livesLeft: number;
}

const catSchema = new Schema<ICat>({
    livesLeft: {type: Number, default: 9}
})

catSchema.methods.makeSound = function () {
    return `${this.name} meows: meow =)`;
}

const Cat = Animal.discriminator<ICat>("Cat", catSchema);

export default Cat;
