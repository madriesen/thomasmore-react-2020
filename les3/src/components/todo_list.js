import React, {Component} from "react";

import InputForm from "./input_form";
import TodoItems from "./todo_items";

class TodoList extends Component {
    constructor() {
        super();

        var items = [];

        if (localStorage.todoitems) {
            items = JSON.parse(localStorage.todoitems);
        }

        this.state = {
            items,
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(item) {
        var items = this.state.items;

        var today = new Date();
        var shortDate =
            today.getDate() +
            "/" +
            (today.getMonth() + 1) +
            "/" +
            today.getFullYear();

        items.push({
            text: item,
            date: shortDate,
            key: Date.now(),
        });

        this.setState({
            items,
        });
        localStorage.todoitems = JSON.stringify(items);
    }

    deleteItem(item) {
        var items = this.state.items;

        var i = items.findIndex((element, i) => element.key === item.key);
        items.splice(i, 1);

        this.setState({
            items,
        });
        localStorage.todoitems = JSON.stringify(items);
    }

    render() {
        return (
            <div className="todoListMain">
                <InputForm onSubmitHandler={this.addItem}/>
                <TodoItems
                    entries={this.state.items}
                    onClickItemHandler={this.deleteItem}
                />
            </div>
        );
    }
}

export default TodoList;
