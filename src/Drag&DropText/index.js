import React, { useState } from 'react';

export default function Drag_Drop() {
    const data1 = ["by", "dear"];
    const data2 = ["hello", "bro"];
    const [div1, setDiv1] = useState(data1);
    const [div2, setDiv2] = useState(data2);
    const onDragStart = (e, index, list) => {
        e.dataTransfer.setData("index", index);
        e.dataTransfer.setData("list", list);
    };

    const onDragOver = (e) => {
        e.preventDefault();
    };

    const onDrop = (e, targetList) => {
        const index = e.dataTransfer.getData("index");
        const sourceList = e.dataTransfer.getData("list");
   
        if (sourceList !== targetList) {
            const draggedItem = sourceList === "div1" ? div1[index] : div2[index];

            if (sourceList === "div1") {
                const newDiv1 = div1.filter((_, i) => i !== parseInt(index));
                setDiv1(newDiv1);
                setDiv2([...div2, draggedItem]);
            } 

            if(sourceList==="div2"){
                const newDiv2 = div2.filter((_, i) => i !== parseInt(index));
                setDiv2(newDiv2);
                setDiv1([...div1, draggedItem]);
            } 
        }
    };
    return (
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
            <div style={{ flexDirection: 'column' }}>
                {div1.map((item, index) => (                    
                <div
                        key={index}
                        style={{ height: '100px', width: '300px', border: '1px solid',background:"lightBlue" }}
                        draggable
                        onDragStart={(e) => onDragStart(e, index, "div1")}
                        onDragOver={onDragOver}
                        onDrop={(e) => onDrop(e, "div1")}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <div style={{ flexDirection: 'column' }}>
                {div2.map((item, index) => (
                    <div
                        key={index}
                        style={{ height: '100px', width: '300px', border: '1px solid' ,background:"lightYellow"}}
                        draggable
                        onDragStart={(e) => onDragStart(e, index, "div2")}
                        onDragOver={onDragOver}
                        onDrop={(e) => onDrop(e, "div2")}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
