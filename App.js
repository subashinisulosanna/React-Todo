import React from "react";
import Time from "./display-time/Time";
import ListTodo from "./List-Todo/ListTodo";
import './App.css';

const Todo = () => {
    return (
        <div>
            <Time></Time>
            <ListTodo></ListTodo>
        </div>
    )
}

export default Todo;