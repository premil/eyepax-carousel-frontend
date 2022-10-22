import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Home slide_count={5} infinte={false} />
    </div>

  );
}

export default App;
