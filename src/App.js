import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import AllGames from './pages/AllGames';
import DetailView from './pages/DetailView';
import RecentlyAdded from './pages/RecentlyAdded';
import SideMenu from './components/SideMenu/SideMenu';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<> <Navbar /> <SideMenu /> <Home /> </>} />
          <Route path="/allgames" element={<> <Navbar /> <SideMenu /> <AllGames /> </>} />
          <Route path="recentlyadded/detailview/:id" element={<> <Navbar /> <SideMenu /> <DetailView /> </>} />
          <Route path="/recentlyadded" element={<> <Navbar /> <SideMenu /> <RecentlyAdded /> </>} />
          <Route path="/allgames/detailview/:id" element={<> <Navbar /> <SideMenu /> <DetailView /> </>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
