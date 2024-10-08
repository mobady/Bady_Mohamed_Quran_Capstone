import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./assets/components/pages/Home";
import Surah from "./assets/components/pages/Surah";
import Navbar from "./assets/components/pages/navBar";
import './App.css';
import Main from './assets/components/pages/Main';
import Signup from './assets/components/pages/Signup';
import Login from './assets/components/pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/surah" element={<Home />} />
          <Route path="/surah/:surahNumber" element={<Surah />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

