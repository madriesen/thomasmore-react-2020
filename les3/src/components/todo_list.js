import React, { Component } from "react";

import InputForm from "./input_form";
import TodoItems from "./todo_items";

class TodoList extends Component {
    constructor(props) {
        super();

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(item) {

    }

    deleteItem(item) {

    }

    render() {
        return (
            <div className="todoListMain">
                <InputForm />
                <TodoItems />
            </div>
        );
    }
}

export default TodoList;