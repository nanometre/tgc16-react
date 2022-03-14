import React from 'react'

// 
// props needed:
// 1. the modified description
// 2. updateformfield
export default function AddTask(props){
    return(<React.Fragment>
        <div>
            <label>Task Name: </label>
            <input type="text" 
                   name="newTaskDescription"
                   value={props.newTaskDescription}
                   onChange={props.updateFormField}
            />
            <button onClick={props.processAddTask}>Add Task</button>
        </div>
    </React.Fragment>)
}