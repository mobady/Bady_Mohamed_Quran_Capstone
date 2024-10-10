import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/Surah.css"

const URL = "http://localhost:8080/surah/"

function Surah() {
  const { id } = useParams();
  const [ayahs, setAyahs] = useState([]);
  const [surahName, setSurahName] = useState('');

  useEffect(() => {
    async function fetchAyahs() {
      const response = await fetch(`${URL}${id}`);
      const result = await response.json();
      console.log(result)
      setAyahs(result.ayahs);
      setSurahName(result.name)
    }
    fetchAyahs();
  }, [id]);
  return (
    <div className="contentAyah">
      <h1 className="surahNameAyah">{surahName}</h1>
      <ul>
        {ayahs.map((ayah) => (
          <li key={ayah._id} className="ayah">
            <span className="ayahText">{ayah.text}</span>
            <span className="ayahNum">{ayah.numberInSurah}</span>
          </li>
        ))}
      </ul>
    </div>

  );
}

export default Surah;
