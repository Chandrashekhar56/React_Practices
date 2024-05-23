import React, { useState, useEffect } from 'react';

const LocalStorage = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const savedData = localStorage.getItem('myData');
    if (savedData) {
      setData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myData', data);
  }, [data]);

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <div>
      <h1>Local Storage Example</h1>
      <input
        type="text"
        value={data}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Data in local storage: {data}</p>
      <button onClick={() => setData('')}>Clear Data</button>
    </div>
  );
};

export default LocalStorage;
