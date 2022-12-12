import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecentlyAdded from './pages/RecentlyAdded';

function App() {
  return (
    <div className="App">
      <RecentlyAdded />
      <Router>
        <Routes>


        </Routes>
      </Router>
    </div>
  );
};

export default App;
