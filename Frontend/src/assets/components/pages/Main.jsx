import React from 'react';
import '../styles/Main.css';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className='main'>
    <div className="contentMain">
      <h1>Welcome to the Quran App</h1>
      <p>Explore the divine text of the Quran with a modern and interactive interface.</p>
      <div className="buttonContainer">
      <Link to={"/ayah/"}>
        <button>Start Reading</button>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Main;
