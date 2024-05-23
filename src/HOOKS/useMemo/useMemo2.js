import React, { useState} from 'react';
import ExpensiveCalculationComponent from './useMemo2_1';

const UseMemo2 = () => {
    const [inputNumber, setInputNumber] = useState(0);
    return (
        <div>
            <h1>useMemo Example</h1>
            <input
                type="number"
                value={inputNumber}
                onChange={(e) => setInputNumber(parseInt(e.target.value, 10))}
            />
            <ExpensiveCalculationComponent number={inputNumber} />
        </div>
    );
};

export default UseMemo2;
