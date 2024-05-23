import React from 'react';

export default function ShowData({ data = [] }) {
  return (
    <div>
      {data.map((rowData, index) => (
        <div key={index}>
          <h1>First Name: {rowData.firstName}</h1>
          <h1>Last Name: {rowData.lastName}</h1>
          <h1>Age: {rowData.age}</h1>
        </div>
      ))}
    </div>
  );
}
