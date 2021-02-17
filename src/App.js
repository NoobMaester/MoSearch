import {useState, useEffect} from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";


function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const getSearch = async (e) =>{
    setSearch(e.target.value);

    const url2 = `https://api.themoviedb.org/3/search/movie?api_key=5ee45e40f18e38736a28d0e24ca4f78e&query=${search}`;
    const response2 = await fetch(url2);
    const data2 = await response2.json();

    if(search){
      console.log(data2.results);
      setMovies(data2.results);
    }
  }

  const getMovies = async () =>{
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5ee45e40f18e38736a28d0e24ca4f78e&page=1`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.results);
    setMovies(data.results);
  }
  useEffect(() => {
    getMovies();
  }, [search])

  return (
    <div className="App">
      <Header search={search} setSearch= {setSearch} getSearch= {getSearch}/>
      <div className= 'movie-container'>
        {movies.map((movie)=>(
          <MovieList key = {movie.id} {...movie}/>
        ))}
      </div>
    </div>
  );
}

export default App;
