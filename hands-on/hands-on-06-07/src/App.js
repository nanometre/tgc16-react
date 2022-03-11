import logo from './logo.svg';
import './App.css';
import BookingForm from './BookingForm.js';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <BookingForm />
    </div>
  );
}

export default App;
