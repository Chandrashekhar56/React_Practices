import React, { Component } from 'react'
import './todoList.css';
import TodoItems from './todoComponent';

export class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentInput: '',
            currentTodos: [],
        };
    }

    todoList_handleClick = () => {
        const currentInputValue = this.state.currentInput;
        if (!currentInputValue) {
            alert("fill input first : ");
            return;
        }
            const currentTodos = this.state.currentTodos;
        this.setState({ currentTodos: [...currentTodos, { name: currentInputValue, completed: false }], currentInput: '' })
    };

    completeStatus = (index) => {
        const updatedTodo = [...this.state.currentTodos];
        updatedTodo[index].completed = true;
        this.setState({ currentTodos: updatedTodo });

    };

    render() {
        return (
            <div class="wrapper">
                <input className='task_input'
                    type='text'
                    placeholder='create your task'
                    value={this.state.currentInput}
                    onChange={(e) => this.setState({ currentInput: e.target.value })} />

                <button className='task_submit_btn' type='button'
                    onClick={this.todoList_handleClick} >Add</button>
                <br /><br />
                {/*console.losg(">>>>>",this.state.currentTodos)*/}
                {
                    this.state.currentTodos.map((item, index) => (<TodoItems
                        key={index}
                        name={item.name}
                        completed={item.completed}
                        onClick={() => this.completeStatus(index)} />
                    ))
                }
            </div>
        )
    }
}
export default TodoList
