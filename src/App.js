import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import { useState, useEffect } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Components/Card/Card';
import { CardGroup } from 'react-bootstrap';


function App() {
  const [movie, setMovie] = useState([]);
  //const [error, setError] = useState(false);

  const loadData = async () => {
    const res = await fetch ( `https://api.themoviedb.org/3/movie/popular?api_key=1f8a7cfe0a366610b8c205fc01f13a4b&language=en-US&page=1`);

    const data = await res.json();

    setMovie(data.results);
    console.log(data.results);
  }

  useEffect ( () => {
    loadData();
  }, []);
  

  return (
    <div className="App">
        <Header />
        <Main/>

        <CardGroup>
            {movie.map((movie) => (
            <Card key={movie.id} movie={movie}/>
            ))} 
        </CardGroup>

        <Footer />
    </div>
  );
}

export default App;