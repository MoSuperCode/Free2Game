import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecentlyAdded from './pages/RecentlyAdded';

function App() {
  return (
    <div className="App">
      <RecentlyAdded />
      <Router>
        <Routes>
          <Route path="/" element={<> <Navbar /> <Home /> </>} />
          <Route path="/allgames" element={<> <Navbar /> <AllGames /> </>} />
          <Route path="/detailview/:id" element={<> <Navbar /> <DetailView /> </>} />
          <Route path="/recentlyadded" element={<> <Navbar /> <RecentlyAdded /> </>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
