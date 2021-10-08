import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Card from './card';
import Episode from './episode';
import Button from './button';

import '../styles/apiViewer.css';

import previous from '../assets/previous.png';
import next from '../assets/next.png';


const ApiViewer = () => {
  const URL_CHAR = 'https://rickandmortyapi.com/api/character/';
  const lastID = 671;


  const[result, setResult] = useState({});
  const [id, setId] = useState(1);
  const [episodes, setEpisodes] = useState([]);
  const [error, setError] = useState(false);

  // gets episode through an url in the get character request
  const getEpisode = async (url) => {
    try {
      const response = await axios.get(url);
      // it concatenates arrays because getEpisode is called at most 5 times per Character request
      // setEpisodes((episodes) => episodes.concat(response.data.name));
      setEpisodes(episodes => episodes.concat(response.data));
    }
    catch(err) {
      console.log('Ese episodio no es accesible desde esta dimensión');
    }
  }


  const getCharacter = async () => {
    try {
      const response = await axios.get(`${URL_CHAR}${id}`);
      setResult(response.data);
      setEpisodes([]);
      let i = 0;
      while(i < 5) {
        if(response.data.episode[i]){
          getEpisode(response.data.episode[i]);
        }
        i++
      }
      setError(false)
    }
    catch(err) {
      console.log('Ese personaje no es accesible desde esta dimensión');
      setResult({})
      setEpisodes([]);
      setError(true);
    }
  }

  const previousChar = () => {
    if(id > 1) {
      setId(id => id - 1)
    }
  }

  const nextChar = () => {
    if(id < lastID) {
      setId(id => id + 1)
    }
  }

  useEffect(() => {
    getCharacter();
  }, [id]);


  return(
    <>
      <Navbar func={(e) => setId(Number(e.target.value) || id)} />
      <div id="view">
        <div id="carousel">
          <Button src={previous} callback={previousChar}/>
          {error === true ? <h1>Esta información no está disponible en esta dimensión</h1>
          : <Card
            image={result?.image}
            name={result?.name}
            species={result?.species}
            gender={result?.gender}
            status={result?.status}
            origin={result?.location?.name}
          />}
          <Button src={next} callback={nextChar}/>
        </div>
        <div id="episode-container">
          {!error && <h4>Appears in:</h4>}
          {episodes && episodes.map((epi) =>
              <Episode
                episodeName={epi.name}
                episodeCurrent={epi.episode}
              />
          )}
      </div>
      </div>
    </>
  )
}

export default ApiViewer
