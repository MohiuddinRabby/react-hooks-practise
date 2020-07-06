import React, { useState } from 'react';

const StateTwo = () => {
    const initCount = 0;
    const [count, setCount] = useState(initCount)
    const IncreaseFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
            // prevCount is a function that has access in the old count
        }
    }
    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={() => setCount(initCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}> Decrease</button>
            <button onClick={IncreaseFive}>Increament 5</button>
        </div>
    );
};

export default StateTwo;