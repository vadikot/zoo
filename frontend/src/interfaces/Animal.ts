export interface IAnimal {
    _id: string;
    name: string;
    age: number;
    hungerLevel: number;
    type: string;
}

export interface Cat extends IAnimal {
    livesLeft: number;
}

export interface Dog extends IAnimal {
    breed: string;
}

export enum AnimalType {
    Cat = 'Cat',
    Dog = 'Dog',
}