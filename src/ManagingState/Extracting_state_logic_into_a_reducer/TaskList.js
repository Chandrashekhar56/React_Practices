import TaskAction from "./TaskAction";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
    return (
        <>
            <ul style={{
                listStyle: 'none',
            }}>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <TaskAction task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
                    </li>
                ))}
            </ul>
        </>
    );
}
