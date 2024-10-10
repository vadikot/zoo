// src/components/Zoo.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Animal } from '../interfaces/Animal';

const Zoo: React.FC = () => {
    const [animals, setAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        axios.get('/api/animals')
            .then(res => setAnimals(res.data))
            .catch(err => console.error(err));
    }, []);

    const feedAnimal = (id: string) => {
        axios.post(`/api/animals/${id}/feed`)
            .then(() => {
                setAnimals(animals.map(animal =>
                    animal._id === id ? { ...animal, hungerLevel: Math.max(0, animal.hungerLevel - 30) } : animal
                ));
            })
            .catch(err => console.error(err));
    };

    const makeSound = (id: string) => {
        axios.get(`/api/animals/${id}/sound`)
            .then(res => alert(res.data))
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h1>Зоопарк</h1>
            <ul>
                {animals.map(animal => (
                    <li key={animal._id}>
                        {animal.name} (Возраст: {animal.age}, Уровень голода: {animal.hungerLevel})
                        <button onClick={() => feedAnimal(animal._id)}>Покормить</button>
                        <button onClick={() => makeSound(animal._id)}>Издать звук</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Zoo;