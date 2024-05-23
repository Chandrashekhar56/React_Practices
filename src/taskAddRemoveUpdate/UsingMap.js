import React, { useState } from 'react';

const data = [
    { id: 1, name: 'shekhar', edit: false },
    { id: 2, name: 'sachine', edit: false }
];

export default function TaskAddRemoveUpdate() {
    const [list, setList] = useState(data);
    const [temp, setTemp] = useState('');
    const [count, setCount] = useState(3);
    const [temp1, setTemp1] = useState('');

    const handleInputData = (e) => {
        setTemp(e.target.value);
    };

    const handleAddTask = () => {
        setCount((prev) => prev + 1);
        const user = { id: count, name: temp, edit: false };
        setList([...list, user]);
        setTemp('');
    };

    const handleEditTaskOnClick = (clickedItem) => {
        const updatedEdit = list.map((item) =>
            item?.id === clickedItem?.id ? { ...item, edit: !item?.edit } : item
        );
        setList(updatedEdit); 
    };

    const handleUpdateOnchange = (e) => {
        setTemp1(e.target.value);
    };

    const handleUpdateOnClick = (clickedItem) => {
        const updatedName = list.map((item) =>
            item?.id === clickedItem?.id ? { ...item, name: temp1, edit: !item?.edit } : item
        );
        setList(updatedName);
        setTemp1('');
    };

    const handleDeleteTaskOnClick = (clickedItem) => {
        
        const updateList = list.filter((item, index) => item?.id !== clickedItem?.id);
        setList(updateList);
    };

    return (
        <div style={{marginTop:10}}>
            <input value={temp} onChange={handleInputData} />
            <button onClick={handleAddTask} style={{marginLeft:10}}>Add</button>
            {list.map((item) => (
                <div key={item.id} style={{
                    display: 'flex', 
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent:'flex-start',
                    gap: 20,
                    margin:0,
                    marginTop: 20
                }}>
                    id:{item?.id} name:{item?.name}
                    {item?.edit ? (
                        <>
                            <input placeholder="Enter your updated name" value={temp1} onChange={handleUpdateOnchange} />
                            <button onClick={() => handleUpdateOnClick(item)}>Save</button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => handleEditTaskOnClick(item)}>Edit</button>
                            <button onClick={() => handleDeleteTaskOnClick(item)}>Delete</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}
