import React, { useState }  from 'react'
import axios from "axios"
import "./searchFilm.css"

const SearchFilm = () => {
  const [filmsId, setFilmsId] = useState("");
  const [idChosen, setIdChosen] = useState(false);
  const [film, setID] = useState({
  id: "",   
  title: "", 
  original_title: "",
  url: "",
  description: "",
  director: "",
  producer: "",
  release_date: "",
  running_time: "",
});

  const searchId = () => {
    axios.get(`https://ghibliapi.herokuapp.com/films/?title=${filmsId}`).then(
      (res) => {
        setID({
          id: res.data[0].id,
          title: filmsId,
          original_title: res.data[0].original_title,
          url: res.data[0].image,
          description: res.data[0].description,
          director: res.data[0].director,
          producer: res.data[0].producer,
          release_date: res.data[0].release_date,
					running_time: res.data[0].running_time,
          
        });
        console.log(res.data)
        setIdChosen(true);
      }
    );
  };
    return (
        <div className="App">
      <div className="TitleSection">
       <h1></h1>
        <input
          type="text"
          onChange={(event) => {
            setFilmsId(event.target.value);
          }}
        />
        <button onClick={searchId}>Busca Pelicula</button>
      </div>
      <div className="DisplaySection">
        {!idChosen ? (
          <h1> Escoge una Pelicula </h1>
        ) : (
          <div className="Card">
          <h1>{film.title}</h1>
          <img className="image" src={film.url} alt={film.name} />
          <h3>Titulo Original: #{film.original_title}</h3>
          <h3 className="description">description: {film.description}</h3>
          <h3>director: {film.director}</h3>
          <h3>productor: {film.producer}</h3>
          <h3>fecha de lanzamiento: {film.release_date}</h3>
          <h3>tiempo de Duracion: {film.running_time}</h3>
          
        </div>
        )}
      </div>
    </div>
    )
}

export default SearchFilm
