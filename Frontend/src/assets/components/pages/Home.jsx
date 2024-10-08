import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "../styles/Home.css"

function Home() {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.alquran.cloud/v1/meta");
      const result = await response.json();
      console.log(result);
      setSurahs(result.data.surahs.references); // Save the 'surahs.references' array
    }

    fetchData();
  }, []);

  return (
    <div className="contentHome">
      <h1>Quran Surahs</h1>
      <ul>
        {surahs.map(surah => (
          <li key={surah.number}>
            <h2 className="surahName">{surah.englishName} - {surah.name}</h2>
            <div className="surahDetails">
              <p><b>Translation: </b>{surah.englishNameTranslation}</p>
              <p><b>Number of Ayahs: </b>{surah.numberOfAyahs}</p>
              <p><b>Revelation Type: </b>{surah.revelationType}</p>
              <Link to={`/surah/${surah.number}`}>
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
