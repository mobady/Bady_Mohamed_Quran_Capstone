import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./assets/components/pages/Home";
import Surah from "./assets/components/pages/Surah";
import Navbar from "./assets/components/pages/navBar";
import './App.css';
import Main from './assets/components/pages/Main';
import Signup from './assets/components/pages/Signup';
import Login from './assets/components/pages/Login';
import Quiz from './assets/components/pages/Quiz';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/ayah" element={<Home />} />
          <Route path="/ayah/:id" element={<Surah />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

