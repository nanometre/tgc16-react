import React from 'react';

// Create a class-based component with the name "TodoList"
export default class TodoList extends React.Component {
    state = {
        tasks: [
            'Wash the car',
            'Clean the room',
            'Do the laundry',
            'Walk the Dog'
        ]
    }

    renderTodo = () => {
        let todos = [];
        for (let t of this.state.tasks) {
            let e = <li>{t}</li>
            todos.push(e)
        }
        return todos
    }

    renderTodoV2() {
        // let todos = this.state.tasks.map(function(t){
        //     return <li>{t}</li>
        // })

        // let todos = this.state.tasks.map((t)=>{return <li>{t}</li>})

        // let todos = this.state.tasks.map(t=><li>{t}</li>)

        // return todos

        return this.state.tasks.map(t=><li>{t}</li>)
    }

    render() {

        // GOAL IS TO CREATE A TODO ARRAY WITH THE FOLLOWING JSX ELEMENTS
        // let todos = [
        //     <li>Wash the car</li>,
        //     <li>Clean the room</li>,
        //     <li>Do the laundry</li>
        // ]

        return (
            <div>
                <ol>
                {/* {this.renderTodoV2()} */}
                {this.state.tasks.map(t=><li>{t}</li>)}
                </ol>
            </div>
        )
    }
}