// import React, { useMemo } from 'react';
import React from 'react';

const ExpensiveCalculationComponent = ({ number }) => {

    const expensiveCalculation = (num) => {
        console.log('Performing expensive calculation...');
        return num * 2;
    };

    // const memoizedResult = useMemo(() => expensiveCalculation(number), [number]);
    const memoizedResult =expensiveCalculation(number);

    return (
        <div>
            <p>Input Number: {number}</p>
            <p>Result of Expensive Calculation: {memoizedResult}</p>
        </div>
    );
};
export default ExpensiveCalculationComponent;