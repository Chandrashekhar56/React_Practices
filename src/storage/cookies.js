import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieStorage = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        const savedData = Cookies.get('myData');
        if (savedData) {
            setData(savedData);
        }
    }, []);

    useEffect(() => {
        Cookies.set('myData', data);
    }, [data]);

    const handleChange = (event) => {
        setData(event.target.value);
    };

    return (
        <div>
            <h1>Cookie Storage Example</h1>
            <input
                type="text"
                value={data}
                onChange={handleChange}
                placeholder="Type something..."
            />
            <p>Data in cookie: {data}</p>
            <button onClick={() => setData('')}>Clear Data</button>
        </div>
    );
};

export default CookieStorage;
