import React, {FC, useState} from 'react';
import {AnimalType} from "../interfaces/Animal";
import axios from "axios";

interface AddAnimalFormProps {
    animalCallback?: React.Dispatch<React.SetStateAction<number>>;
}

const AddAnimalForm = ({animalCallback}: AddAnimalFormProps) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [hungerLevel, setHungerLevel] = useState('');
    const [animalType, setAnimalType] = useState<AnimalType>(AnimalType.Cat);


    const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newAnimal = {
            name,
            age: Number(age),
            hungerLevel: (Math.max(0, Number(hungerLevel)) > 100) ? 100 : Math.max(0, Number(hungerLevel)),
        }

        // todo we also need add breed if it's a Dog
        try {
            const response = await axios.post("/api/animals", {
                type: animalType,
                data: newAnimal,
            });

            if (response.status === 201 || response.status === 200) {
                if (animalCallback) {
                    animalCallback(prev => prev + 1);
                }
            }

            // console.log('Animal added:' + response.data);
        } catch (e) {
            throw new Error("animal not added: " + (e as Error).message);
        }

        // console.log(newAnimal);
    }

    return (
        <div>
            <h2>Add animal</h2>
            <form onSubmit={handlerSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type={"text"}
                        value={name}
                        placeholder={"name"}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Age:</label>
                    <input
                        type={"number"}
                        value={age}
                        placeholder={"Age"}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Hungry level (min: 0, max: 100):</label>
                    <input
                        type={"number"}
                        value={hungerLevel}
                        placeholder={"Age"}
                        onChange={(e) => setHungerLevel(e.target.value)} // todo add input validation
                        required
                    />
                </div>
                <div>
                    <label>Type:</label>
                    <select
                        name={"selectAnimalType"}
                        value={animalType}
                        onChange={e => setAnimalType(e.target.value as AnimalType)}
                    >
                        {
                            Object.values(AnimalType).map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))
                        }
                    </select>
                </div>
                <br/>
                <button type={"submit"}>Add</button>
            </form>
        </div>
    );
};

export default AddAnimalForm;