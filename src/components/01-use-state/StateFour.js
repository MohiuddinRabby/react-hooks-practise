import React, { useState } from 'react';

const StateFour = () => {
    const [items, setItems] = useState([]);
    const addNewNumber = () => {
        setItems([...items, {
            id: items + 1,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <h1>State with array</h1>
            <button onClick={addNewNumber}>Add number</button>
            {
                items.map(item => <li key={item.id}>{item.value}</li>)
            }
        </div>
    );
};

export default StateFour;