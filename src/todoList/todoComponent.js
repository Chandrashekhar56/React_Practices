import React from 'react';
//-------------------------------------------------------------------------------------------------------------//
/*const TodoItems = ({ name, completed, onClick }) => {
    return (
        <div className="display">
            <p className="dispaly_task">{name}</p>
            <button className={`mark_button ${completed ? 'completed' : ''}`} type="button" onClick={onClick}>
                {completed ? 'Completed' : 'Mark Complete'}
            </button>
            <br /><br />
        </div>
    );
};
*/
//-------------------------------------------------------------------------------------------------------------//

/*const TodoItems = (props) => {
    return (
        <div className="display">
            <p className="dispaly_task">{props.name}</p>
            <button className={`mark_button ${props.completed ? 'completed' : ''}`} type="button" onClick={props.onClick}>
                {props.completed ? 'Completed' : 'Mark Complete'}
            </button>
            <br /><br />
        </div>
    );
};
*/
//-------------------------------------------------------------------------------------------------------------//

const TodoItems = (props) => {
    const {name,completed,onClick}=props||{};
    return (
        <div className="display">
            <p className="dispaly_task">{name}</p>
            <button className={`mark_button ${completed ? 'completed' : ''}`} type="button" onClick={onClick}>
                {completed ? 'Completed' : 'Mark Complete'}
            </button>
            <br /><br />
        </div>
    );
};
export default TodoItems;
