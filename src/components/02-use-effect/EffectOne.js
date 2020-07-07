import React, { useState, useEffect } from 'react';

const EffectOne = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `clicked ${count} times`
    })
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
};

export default EffectOne;