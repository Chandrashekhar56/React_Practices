import React, { useState } from 'react';
import List1Items from './List1Items';
import List2Items from './List2Items';

export default function SwapList() {

    const [list1, setList1] = useState([
        { id: 1, name: 'A', check: false },
        { id: 2, name: 'b', check: false },
        { id: 3, name: 'c', check: false },
    ]);

    const [list2, setList2] = useState([
        { id: 1, name: '1', check: false },
        { id: 2, name: '2', check: false },
        { id: 3, name: '3', check: false },
    ]);

    function handleShow() 
    {
        const updatedList1 = [...list1];
        const updatedList2 = [...list2];
        const minLength = Math.min(updatedList1.length, updatedList2.length);
        for (let index = 0; index < minLength; index++) 
        {
            if (updatedList1[index].check && updatedList2[index].check) 
            {
                const tempName = updatedList1[index].name;
                updatedList1[index].name = updatedList2[index].name;
                updatedList2[index].name = tempName;
            }
        }
        setList1([...updatedList1]);
        setList2([...updatedList2]);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <List1Items list1={list1} setList1={setList1} />
            <List2Items list2={list2} setList2={setList2} />
            <button onClick={handleShow}>show</button>
        </div>
    );

}
