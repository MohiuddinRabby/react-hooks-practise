import React, { useState } from 'react';

const EffectTwo = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    
    return (
        <div>
            <h1>X - {x} Y - {y}</h1>
        </div>
    );
};

export default EffectTwo;