import React, { useReducer, useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
function Extracting_state_logic_into_a_reducer() {
    const [nextId,setNextId] = useState(3);
    const initialTasks = [
        { id: 0, text: "Visit Kafka Museum", done: true },
        { id: 1, text: "Watch a puppet show", done: false },
        { id: 2, text: "Lennon Wall pic", done: false },
    ];
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
    function handleAddTask(text) {
        setNextId((prev)=> prev+1);
        dispatch({
            type: "added",
            id: nextId,
            text: text,
        });
    }
    function handleChangeTask(task) {
        dispatch({
            type: "changed",
            task: task,
        });
    }
    function handleDeleteTask(taskId) {
        dispatch({
            type: "delete",
            id: taskId,
        });
    }
    function tasksReducer(tasks, action) {
        switch (action.type) {
            case "added": { return [...tasks, { id: action.id, text: action.text, done: false, },]; }
            case "changed": { return tasks.map((item) => item.id === action.task.id ? action.task : item); }
            case "delete": { return tasks.filter((item) => item.id !== action.id); }
            default: { throw Error("Unkown action: " + action.type); }
        }
    }
    return (
        <>
            <h1>Let's Start Add Task.....</h1>
            <AddTask onAddTask={handleAddTask} />
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask} />
        </>
    )
}
export default Extracting_state_logic_into_a_reducer
