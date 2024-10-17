import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/pages/Home";
import Surah from "./components/pages/Surah";
import Navbar from "./components/pages/navBar";
import './App.css';
import Main from './components/pages/Main';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Quiz from './components/pages/Quiz';
import {useState,useEffect } from "react"

import {auth} from "./assets/config"
function App() {
  let [userAuth,setUserAuth]=useState(null)

  useEffect(()=>{
let unsub = auth.onAuthStateChanged((user)=>{
  setUserAuth(auth)
  unsub()
})
  },[])
  return (
    <Router>
      <Navbar userAuth={userAuth} setUserAuth ={setUserAuth}/>
      <div>
        <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/surahs" element={<Home />} />
          <Route path="/ayah/:id" element={<Surah />} />
          <Route path="/signup" element={<Signup setUserAuth ={setUserAuth}/>} />
          <Route path="/login" element={<Login setUserAuth={setUserAuth} />} />
          <Route path='/quiz' element={<Quiz userAuth={userAuth}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

