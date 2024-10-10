import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "../styles/Home.css"

function Home() {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/ayah");
      const result = await response.json();
      console.log(result);
      console.log(result);
      setSurahs(result); 
    }

    fetchData();
  }, []);

  return (
    <div >
      <h1>Quran Surahs</h1>
      <ul>
        {surahs.map(surah => (
          <li key={surah._id}>
            <h2 className="surahName">{surah.englishName} - {surah.name}</h2>
            <div className="surahDetails">
              <p><b>Translation: </b>{surah.englishNameTranslation}</p>
              <p><b>Number of Ayahs: </b>{surah.ayahs.length}</p>
              <p><b>Revelation Type: </b>{surah.revelationType}</p>
              <Link to={`/ayah/${surah.number}`}>
                <button className="buttonContainer">
                  Read Surah {surah.englishName}</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
