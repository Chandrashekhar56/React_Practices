import React, { useState, useEffect } from 'react';

const SessionStorage = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        const savedData = sessionStorage.getItem('myData');
        if (savedData) {
            setData(savedData);
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem('myData', data);
        const timeOut = setTimeout(() => {
            sessionStorage.removeItem('myData');
            setData('');
        },5000);
        return ()=> clearTimeout(timeOut);
    }, [data]);
 
    const handleChange = (event) => {
        setData(event.target.value);
    };

    return (
        <div>
            <h1>Session Storage Example</h1>
            <input
                type="text"
                value={data}
                onChange={handleChange}
                placeholder="Type something..."
            />
            <p>Data in session storage: {data}</p>
            <button onClick={() => setData('')}>Clear Data</button>
        </div>
    );
};

export default SessionStorage;
