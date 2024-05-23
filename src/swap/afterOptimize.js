import React, { useState } from 'react'

const data_list1 = [
    { id: 1, name: "A", check: false },
    { id: 2, name: "B", check: false },
    { id: 3, name: "C", check: false },

];

const data_list2 = [
    { id: 1, name: 1, check: false },
    { id: 2, name: 2, check: false },
    { id: 3, name: 3, check: false },

];

export default function SwapExample() {
    const [list1, setList1] = useState(data_list1);
    const [list2, setList2] = useState(data_list2);

    const handleCheckedList = (index, list, setList) => {
        const updateList = list.map((item, i) => ({
            ...item,
            check: i === index ? !item?.check : false,
        }));
        setList(updateList);
    };

    const handleSwapOnClick = () => {
        const index1 = list1.findIndex((item) => item?.check === true);
        const index2 = list2.findIndex((item) => item?.check === true);
        const swap = list1[index1].name;
        list1[index1].name = list2[index2].name;
        list2[index2].name = swap;
        setList1([...list1]);
        setList2([...list2]);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 50,
                margin: 0,
                marginTop: 200,
            }}>
            <h1>Swap items</h1>
            <di>
                {list1.map((item, index) => (
                    <div key={item?.id}>
                        <input
                            type='checkbox'
                            checked={item?.check}
                            onChange={() => handleCheckedList(index, list1, setList1)} />
                        {item?.name}
                    </div>
                ))}
            </di>

            <div>
                {list2.map((item, index) => (
                    <div key={item?.id} style={{ flexDirection: "column" }}>
                        <input
                            type='checkbox'
                            checked={item?.check}
                            onChange={() => handleCheckedList(index, list2, setList2)} />
                        {item?.name}
                    </div>
                ))}
            </div>

            <button onClick={handleSwapOnClick}>Click for Swap</button>
        </div>
    )
}

