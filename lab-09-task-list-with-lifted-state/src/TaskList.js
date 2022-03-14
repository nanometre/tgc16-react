import React from 'react'

// inside props, we expect to have a key named 'tasks'
export default function TaskList(props) {
    
    function renderTasks() {
        return props.tasks.map( eachTask => {
            if (props.taskBeingEdited != null && props.taskBeingEdited.id === eachTask.id) {
                // display the code for editing the task
                return <li key={eachTask.id}>
                    <input type="text"
                            name="modifiedTaskDescription"
                           value={props.modifiedTaskDescription}
                           onChange={props.updateFormField}
                    />
                    <button onClick={props.processEditTask}>Confirm</button>
                    </li>
            } else {
                // display the code for normal task display
                return <li key={eachTask.id}>
                        {eachTask.description}
                        <button onClick={()=>{
                            props.editTask(eachTask)               
                        }}>Edit</button>
                        </li>
            }
        
        })
    }
    return (
        <React.Fragment>
            <h1>Task List</h1>
            <ul>
                 {renderTasks()}
            </ul>
        </React.Fragment>
    )
}