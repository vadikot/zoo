import React, {useEffect, useState} from 'react';
import axios from "axios";

const App = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5050')
            .then(response => {
                setMessage(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        fetch('http://localhost:3000/animals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'Lion',
                species: 'Panthera leo',
                age: 3
            }),
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));

    }, []);



    return (
        <div>
            <h1>Zoo app</h1>
            <p>{message}</p>
        </div>
    );
};

export default App;