import React, { useContext } from 'react';
import { NameContext } from '../../App';

const ContextOne = () => {
    const userName = useContext(NameContext)
    return (
        <div>
            <p>Name: {userName}</p>
        </div>
    );
};

export default ContextOne;