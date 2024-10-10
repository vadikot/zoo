import React from 'react';
import Zoo from "./components/Zoo";
import AddAnimalForm from "./components/AddAnimalForm";

const App = () => {
    return (
        <div>
            <h1>Zoo app</h1>
            <AddAnimalForm/>
            <Zoo/>
        </div>
    );
};

export default App;