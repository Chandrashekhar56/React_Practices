import React from 'react';

const stylefile = {
  table: {
  },
  th: {
    fontSize: '30px',
  },
  td:
  {
  }
}

export default function Table({ data = [], columns = [], onRowPress = () => { }, deletePress = () => { } }) {
  return (
    <table style={stylefile.table}>
      <thead>
        <tr>
          {columns.map((header, index) => (
            <th style={stylefile.th} key={index}>{header.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td style={stylefile.td} key={colIndex}>{rowData[column.dataKey]}</td>
            ))}
            <td><button onClick={() => onRowPress({ rowData, rowIndex })}>Edit</button></td>
            <td><button onClick={() => deletePress({ rowData, rowIndex })}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
