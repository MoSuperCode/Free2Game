import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import AllGames from './pages/AllGames';
import DetailView from './pages/DetailView';
import RecentlyAdded from './pages/RecentlyAdded';

function App() {
  return (
    <div className="App">


      <Router>
        <Routes>
          <Route path="/" element={<> <Navbar /> <Home /> </>} />
          <Route path="/allgames" element={<> <Navbar /> <AllGames /> </>} />
          <Route path="recentlyadded/detailview/:id" element={<> <Navbar /> <DetailView /> </>} />
          <Route path="/recentlyadded" element={<> <Navbar /> <RecentlyAdded /> </>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
