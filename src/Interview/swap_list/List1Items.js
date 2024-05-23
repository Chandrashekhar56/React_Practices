import React from 'react';

export default function List1Items({ list1, setList1 }) {

    function handleCheckboxChange1(index) {
        const updatedList1 = [...list1];
        updatedList1[index].check = !updatedList1[index].check;
        setList1(updatedList1);
    }

    return (
        <div>
            {list1.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '5px' }}>
                    <input
                        type='checkbox'
                        checked={item.check}
                        onChange={() => handleCheckboxChange1(index)}
                        style={{ marginRight: '5px' }}
                    />
                    <p>item: {item.name}</p>
                </div>
            ))}
        </div>
    )
}
