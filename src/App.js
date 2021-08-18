//import logo from './logo.svg';
import './App.css';
import {getMoviesBySearchTerm,getMovieDetailsById} from './movies';
import {MovieCard} from './MovieCard';

function App() {
  let movieSearch = getMoviesBySearchTerm('star trek');
  console.log(333,movieSearch);
  //console.log(movieSearch[0].imdbID);
  //let movie1 = getMovieDetailsById(movieSearch[0].imdbID);

  return (
    <div>
      <MovieCard posterUrl={movieSearch.Poster} title='Steph' type='Steph' />
    </div>
  );
}

export default App;
