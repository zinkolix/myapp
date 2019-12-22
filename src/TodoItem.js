import React from "react"

function TodoItem (props) {
    return (
        <div class = "text-center">
        <div className = "todo-item" class="well well-sm">
            <input type = "checkbox" checked = {props.item.completed}
            onChange={() => props.handleChange(props.item.id) } /> {"  "}
                {props.item.text}
        </div>
        <hr />
        </div>
    )
}

export default TodoItem;