import React, { useState } from 'react'

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  return (
    <div style={{
      justifyContent: "space-between",
      alignItems: 'center',

    }}> 
    
      <input
        placeholder='Add Task'
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: '300px',
          height: '30px'
        }}
      />

      <button style={{
        margin: '10px',
        width: '100px',
        height: '30px'
      }}
        onClick={() => { onAddTask(text); setText(""); }}>Add</button>
    </div>
  )
}
