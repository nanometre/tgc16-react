import './App.css';
import TodoList from './TodoList.js';

function App() {

  // to understand list rendering, 2 important concepts
  // 1. JSX elemnts are just JS objects
  // 2. We can render ARRAYS of JSX elements.
  let bulletPoints = [
    <li>One</li>,
    <li>Two</li>,
    <li>Three</li>,
  ]

  return (
    <div className="App">
        <h1>My Todos</h1>
        {bulletPoints}
        <TodoList />
    </div>
  );
}

export default App;
