import React, {useState} from 'react';
import Zoo from "./components/Zoo";
import AddAnimalForm from "./components/AddAnimalForm";

const App = () => {
    const [animalCounter, setAnimalCounter] = useState<number>(0);

    return (
        <div>
            <h1>Zoo app</h1>
            <AddAnimalForm animalCallback={setAnimalCounter}/>
            <Zoo animalCounter={animalCounter}/>
        </div>
    );
};

export default App;