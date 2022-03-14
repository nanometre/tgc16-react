import React from 'react'
import TaskList from './TaskList'
import AddTask from './AddTask'

class App extends React.Component {

  state = {
    'tasks': [
      {
        'id': 1,
        'description': 'Clean the room',
        'done': false
      },
      {
        'id': 2,
        'description': 'Wash the toilet',
        'done': false
      },
      {
        'id': 3,
        'description': 'Pay the bills',
        'done': false
      }
    ],
    newTaskDescription: '',
    taskBeingEdited: null,
    modifiedTaskDescription: ''
  }

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addTask = () => {
    let newTask = {
      'id': Math.floor(Math.random() * 100000 + 99999),
      'description': this.state.newTaskDescription
    }

    let cloned = [...this.state.tasks, newTask];
    this.setState({
      'tasks': cloned
    })
  }

  editTask = (task) => {
    this.setState({
      'taskBeingEdited': task,
      'modifiedTaskDescription': task.description
    })
  }

  processEditTask = () => {
    // clone the task that is being changed
    let editedTask = {
      ...this.state.taskBeingEdited,
      description: this.state.modifiedTaskDescription
    }

    let index = this.state.tasks.findIndex(eachTask => eachTask.id === this.state.taskBeingEdited.id);
    this.setState({
      'tasks': [
        ...this.state.tasks.slice(0, index),
        editedTask,
        ...this.state.tasks.slice(index+1)
      ],
      'taskBeingEdited':null
    })
  }

  render() {
    return (
      <React.Fragment>
        <TaskList tasks={this.state.tasks}
          modifiedTaskDescription={this.state.modifiedTaskDescription}
          editTask={this.editTask}
          updateFormField={this.updateFormField}
          taskBeingEdited={this.state.taskBeingEdited}
          processEditTask={this.processEditTask}
        />
        <AddTask newTaskDescription={this.state.newTaskDescription}
          updateFormField={this.updateFormField}
          processAddTask={this.addTask}

        />
      </React.Fragment>

    );
  }

}

export default App;
