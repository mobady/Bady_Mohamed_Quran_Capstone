import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/Surah.css"

function Surah() {
  const { surahNumber } = useParams();
  const [ayahs, setAyahs] = useState([]);
  const [surahName, setSurahName] = useState('');

  useEffect(() => {
    async function fetchAyahs() {
      const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
      const result = await response.json();
      console.log(result.data)
      setAyahs(result.data.ayahs);
      setSurahName(result.data.name)
    }
    fetchAyahs();
  }, [surahNumber]);
  return (
    <div className="contentAyah">
      <h1 className="surahNameAyah">{surahName}</h1>
      <ul>
        {ayahs.map((ayah) => (
          <li key={ayah.numberInSurah} className="ayah">
            <span className="ayahText">{ayah.text}</span>
            <span className="ayahNum">{ayah.numberInSurah}</span>
          </li>
        ))}
      </ul>
    </div>

  );
}

export default Surah;
