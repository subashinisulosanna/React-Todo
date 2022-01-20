import React, { useState } from "react";
import Todos from "../Todo/Todos";
import './TodoValues.css';
const TodoValues = props => {
     const [value, setvalue] = useState('')
    const handleSubmit = e=> {
        e.preventDefault();
        console.log(value)
        props.submit(
            {
                text: value,
                isComplete: false
            }
        );
        setvalue('')
    }
  
    const handleInput = e => {
        setvalue(e.target.value)
        
    }

    return (
        <div className="List">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your todo" className="todoInput" onChange={handleInput} value={value}></input>
                <input type="submit" value="+" className="todoSubmit"></input>
                
            </form>
            
        
        </div>
    )
}
export default TodoValues