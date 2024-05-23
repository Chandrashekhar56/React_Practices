import React, { useState } from 'react';
export default function TaskAction({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const handleCheckBox=(e) => {onChange({ ...task, done: e.target.checked }); };
    const handleEdit = (e) => { onChange({ ...task, text: e.target.value }); };
    const handleToggleEdit = () => { setIsEditing(!isEditing); };
    const handleDelete = () => { onDelete(task.id); };
    return (
        <label
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                marginTop: '15px',
            }}>
            <input type="checkbox" checked={task.done} onChange={handleCheckBox} />
            {isEditing ? (
                <>
                    <input value={task.text} onChange={handleEdit} />
                    <button onClick={handleToggleEdit}>Save</button>
                </>
            ) : (
                <>
                    {task.text}
                    <button onClick={handleToggleEdit}>Edit</button>
                </>
            )}
            <button onClick={handleDelete}>Delete</button>
        </label>
    );
}
