import logo from './logo.svg';
import './App.css';
import SurveyForm from './SurveyForm.js';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <SurveyForm />
    </div>
  );
}

export default App;
