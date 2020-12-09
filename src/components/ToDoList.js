import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddToDo from './AddToDo';

export default class ToDoList extends Component {
    state = {
        toDos: [
            { Id: '1', Title: 'Push your code to github', Status: 'Done' },
            { Id: '2', Title: 'Email to your manager', Status: 'Pending' }
        ]
    };

    deleteToDo = (todo) => {
        const filterItems = this.state.toDos.filter(x => x.Id !== todo.Id);

        this.setState({
            toDos: filterItems
        });
    };

    editToDo = (x) => {
        this.setState(state => ({
            toDos: state.toDos.map(todo => {
                if (todo.Id === x.Id) {
                    return {
                        ...todo,
                        Status: todo.Status === "Done" ? "Pending" : "Done"
                    };
                } else {
                    return todo;
                }
            })
        }));
    };
    addToDo = (todo) => {
        this.setState({
            toDos: [...this.state.toDos, todo]
        });
    };
    render() {
        return (
            <div>
                <AddToDo onAdd={this.addToDo}></AddToDo>
                <h1>ToDo List</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.toDos.map(x => {
                            return (
                                <tr key={x.Id}>
                                    <td>{x.Id}</td>
                                    <td>{x.Title}</td>
                                    <td style={{ color: x.Status === "Done" ? "green" : "red" }}>
                                        {x.Status}
                                    </td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => this.deleteToDo(x)}>
                                            <span>
                                                <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                                            </span>
                                        </button>
                                        <button className="btn btn-primary" onClick={() => this.editToDo(x)}>
                                            <span>
                                                <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
