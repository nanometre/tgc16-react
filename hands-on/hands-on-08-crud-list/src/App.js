import logo from './logo.svg';
import './App.css';
import BudgetTracker from './BudgetTracker';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <BudgetTracker />
    </div>
  );
}

export default App;
