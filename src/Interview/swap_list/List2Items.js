import React from 'react';

export default function List2Items({ list2 , setList2 }) {

    function handleCheckboxChange2(index) {
        const updatedList2 = [...list2];
        updatedList2[index].check = !updatedList2[index].check;
        setList2(updatedList2);
    }

    return (
        <div>
            {list2.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '5px' }}>
                    <input
                        type='checkbox'
                        checked={item.check}
                        onChange={() => handleCheckboxChange2(index)}
                        style={{ marginRight: '5px' }}
                    />
                    <p>item: {item.name}</p>
                </div>
            ))}
        </div>
    )
}
