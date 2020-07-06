import React, { useState } from 'react';

const StateOne = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}> Increase </button>
            <h2>Count : {count}</h2>
        </div>
    );
};

export default StateOne;