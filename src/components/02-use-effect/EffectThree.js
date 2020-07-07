import React, { useState, useEffect } from 'react';

const EffectThree = () => {
    const [count, setCount] = useState(0)
    const tick = () => {
        setCount(count + 1)
    }
    useEffect(() => {
        const runTick = setInterval(tick, 1000);
        return () => {
            clearInterval(runTick)
        }
    }, [count])
    return (
        <div>
            <h1> {count}</h1>
        </div>
    );
};

export default EffectThree;