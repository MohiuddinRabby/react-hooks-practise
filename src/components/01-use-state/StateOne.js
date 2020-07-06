import React, { useState } from 'react';

const StateOne = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
            <h2>Count : {counter}</h2>
        </div>
    );
};

export default StateOne;