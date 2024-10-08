import React, {useState} from 'react';
import axios from "axios";

const App = () => {
    const [message, setMessage] = useState('');

    const addAnimal = () => {
        axios.post('animal/add', {
            name: 'lion 222',
            age: 2,
        })
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
            .catch(error => console.error(error))
    }

    const showAllAnimals = () => {
        axios.get('/animal/get') // Ensure this matches your Express route
            .then(res => {
                console.log('All Animals:', res.data); // Log the data
            })
            .catch(error => {
                console.error('Error fetching animals:', error); // Log any errors
            });
    };


    return (
        <div>
            <h1>Zoo app</h1>
            <button onClick={addAnimal}>add animal</button>
            <button onClick={showAllAnimals}>show all animals</button>
            <p>{message}</p>
        </div>
    );
};

export default App;