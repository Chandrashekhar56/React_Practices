import React, { useState } from 'react';

const data = [
    { id: 1, name: 'shekhar', edit: false },
    { id: 2, name: 'sachine', edit: false },
    { id: 3, name: 'vijay', edit: false },
];

export default function TaskAddRemoveUpdate() {
    const [list, setList] = useState(data);
    const [temp, setTemp] = useState();
    const [count, setCount] = useState(4);

    const handelAddOnClick = () => {
        setCount(prev => prev + 1);
        const user = { id: count, name: temp, edit: false };
        setList([...list, user]);
        setTemp("");
    };

    const handleEditOnClick = (index) => {
        const updatedList = [...list];
        updatedList[index] = { ...updatedList[index], edit: !updatedList[index]?.edit };
        setList(updatedList);
    };

    const handleInputOnChange = (e, index) => {
        const updatedList = [...list];
        updatedList[index] = { ...updatedList[index], name: e.target.value };
        setList(updatedList);
    };

    const handleSaveOnClick = (index) => {
        const updatedList = [...list];
        updatedList[index] = { ...updatedList[index], edit: !updatedList[index]?.edit };
        setList(updatedList);
    };

    const handleDeleteOnClick = (clickedIndex) => {
        const updateList = list.filter((item, index) => index !== clickedIndex);
        setList(updateList);
    };

    return (
        <div style={{ marginTop: 10 }} >
            <input value={temp} onChange={(e) => setTemp(e.target.value)} />
            <button onClick={handelAddOnClick} style={{ marginLeft: 10 }}>add</button>

            {list.map((item, index) => (
                <div key={item?.id}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: 20,
                        margin: 0,
                        marginTop: 20
                    }}>
                    id: {item?.id} name: {item?.name}
                    {item?.edit ?
                        <div>
                            <input value={item.name} onChange={(e) => handleInputOnChange(e, index)} />
                            <button onClick={() => handleSaveOnClick(index)} style={{ marginLeft: 10 }}>save</button>
                        </div>
                        :
                        <div>
                            <button onClick={() => handleEditOnClick(index)} style={{ marginLeft: 10 }}>edit</button>
                            <button onClick={() => handleDeleteOnClick(index)} style={{ marginLeft: 10 }}>delete</button>
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}
