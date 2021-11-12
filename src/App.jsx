
import "./App.css";
import { useState } from "react";
import axios from "axios"

const App = () => {
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
    axios.get(`https://ghibliapi.herokuapp.com/films/${filmsId}`).then(
      (res) => {
        setID({
          id: filmsId,
          title: res.data.title,
          original_title: res.data.original_title,
          url: res.data.image,
          description: res.data.description,
          director: res.data.director,
          producer: res.data.producer,
          release_date: res.data.release_date,
					running_time: res.data.running_time,
          
        });
        console.log(res.data)
        setIdChosen(true);
      }
    );
  };

  return (
    <div className="App">
      <div className="TitleSection">
       <h1>Buscador</h1>
        <input
          type="text"
          onChange={(event) => {
            setFilmsId(event.target.value);
          }}
        />
        <button onClick={searchId}>Search Id</button>
      </div>
      <div className="DisplaySection">
        {!idChosen ? (
          <h1> Please choose a Id </h1>
        ) : (
          <div className="Card">
          <h1>{film.title}</h1>
          <img className="image" src={film.url} alt={film.name} />
          <h3>original_title: #{film.original_title}</h3>
          <h3 className="description">description: {film.description}</h3>
          <h3>director: {film.director}</h3>
          <h3>productor: {film.producer}</h3>
          <h3>release_date: {film.release_date}</h3>
          <h3>running_time: {film.running_time}</h3>
          
        </div>
        )}
      </div>
    </div>
  );
};

export default App;