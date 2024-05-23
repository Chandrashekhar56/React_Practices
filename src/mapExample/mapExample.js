import React, { useState } from 'react';
import ShowData from './showData';

export default function MapExample() {
  const [usersList, setUsersList] = useState([{
    firstName: '',
    lastName: '',
    age: '',
  }]);

  const [currentUser, setCurrentUser] = useState({
    firstName: '',
    lastName: '',
    age: '',
  });

  const handleChange = (e) => {
    const input = e.target.value;
    setCurrentUser({ ...currentUser, [e.target.name]: input });
  };

  const handleClick = () => {
    if (currentUser.firstName || currentUser.lastName || currentUser.age) {
      setUsersList([...usersList, currentUser]);
    }
    setCurrentUser({
      firstName: '',
      lastName: '',
      age: '',
    });
  };

  return (
    <div>
      <label>First Name</label>
      <input type='text' name='firstName' value={currentUser.firstName} onChange={handleChange} /><br />
      <label>Last Name</label>
      <input type='text' name='lastName' value={currentUser.lastName} onChange={handleChange} /><br />
      <label>Age</label>
      <input type='text' name='age' value={currentUser.age} onChange={handleChange} /><br />
      <button type='button' onClick={handleClick}>Submit</button>
      <ShowData data={usersList} />
    </div>
  );
}
