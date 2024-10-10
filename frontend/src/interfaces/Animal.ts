export interface Animal {
    _id: string;
    name: string;
    age: number;
    hungerLevel: number;
    type: string;
}

export interface Cat extends Animal {
    livesLeft: number;
}

export interface Dog extends Animal {
    breed: string;
}