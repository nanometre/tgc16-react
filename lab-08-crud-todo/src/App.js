import logo from './logo.svg';
import './App.css';
import TodoList from "./TodoList.js"

function App() {
  return (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
        <TodoList />
    </div>
  );
}

export default App;
