import React, { useState, useEffect } from 'react';

const EffectTwo = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const logMouseMove = e => {
        console.log('logmousemoved')
       setX(e.clientX)
       setY(e.clientY)
    }
    useEffect(() => {
        console.log('useEffect added');
        window.addEventListener('mousemove', logMouseMove)
    },[])

    return (
        <div>
            <h1>X - {x} Y - {y}</h1>
        </div>
    );
};

export default EffectTwo;