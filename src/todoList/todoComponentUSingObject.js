import React, { Component } from 'react';
import './todoList.css';
import TodoItems from './todoComponent';

export class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentInput: '',
            currentTodos: {},
        };
    }

    handleTodoList = () => {
        const currentInputValue = this.state.currentInput;
        if (!currentInputValue.trim()) {
            alert("Please fill in the input field before adding a task.");
            return;
        }

        const currentTodos = { ...this.state.currentTodos };
        const randomKey = Math.random().toString(36).substring(7);

        const newTodo = { [randomKey]: { name: currentInputValue, completed: false } };
        this.setState({ currentTodos: { ...currentTodos, ...newTodo }, currentInput: '' });
    };

    handleCompleteStatus = (key) => {
        const updatedTodos = { ...this.state.currentTodos };
        updatedTodos[key].completed = true;
        this.setState({ currentTodos: updatedTodos });
    };

    render() {
        return (
            <div className="wrapper">
                <input
                    className='task_input'
                    type='text'
                    placeholder='Create your task'
                    value={this.state.currentInput}
                    onChange={(e) => this.setState({ currentInput: e.target.value })}
                />

                <button
                    className='task_submit_btn'
                    type='button'
                    onClick={this.handleTodoList}
                >Add</button>
                <br /><br />
                
                {Object.keys(this.state.currentTodos).map((key) => (
                    <TodoItems
                        key={key}
                        name={this.state.currentTodos[key].name}
                        completed={this.state.currentTodos[key].completed}
                        onClick={() => this.handleCompleteStatus(key)}
                    />
                ))}
            </div>
        );
    }
}

export default TodoList;

