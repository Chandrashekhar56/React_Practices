import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetchComponent = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://raw.githubusercontent.com/Chandrashekhar56/JavaScript-concepts/main/student.json'
                );
                setStudents(response.data);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Student Data</h1>
            <ul style={{ padding: 0 }}>
                {students.map((student) => (
                    <li key={student.id} style={{ textDecoration: 'none' }}>
                        {student.name} - {student.age} years old
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataFetchComponent;
