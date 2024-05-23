import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosExample = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://raw.githubusercontent.com/Chandrashekhar56/JavaScript-concepts/main/student.json');
                if (response.status !== 200) {
                    throw new Error('Network response was not ok');
                }
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div>
            <h1>Axios Example</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Hobby</th>
                        <th>Class</th>
                        <th>ID</th>
                        <th>Gender</th>
                        <th>Blood</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item?.id}>
                            <td >{item?.name}</td>
                            <td>{item?.age}</td>
                            <td>{item?.contact}</td>
                            <td>{item?.email}</td>
                            <td>{item?.address}</td>
                            <td>{item?.hobby}</td>
                            <td>{item?.class}</td>
                            <td>{item?.id}</td>
                            <td>{item?.gender}</td>
                            <td>{item?.bloodGroup}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AxiosExample;
