// import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SinglePage from "./pages/SinglePage";
import SinglePageTV from "./pages/SinglePageTV";
import Movie from "./pages/Movie";
import TVShows from "./pages/TVShows";
import PopularMovies from "./pages/PopularMovies";
import PopularTV from "./pages/PopularTV";
import TopRated from "./pages/TopRated";
import Test from "./pages/Test";
function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />}/>
      <Route  path="/test" element={<Test />}/>
      <Route element={<SinglePage />} path="/movie/:movieId"/>
      <Route element={<SinglePageTV />} path="/tv/:movieId"/>
      <Route element={<Movie />} path="/newMovies"/>
      <Route element={<TVShows />} path="/newTVShows"/>
      <Route element={<PopularMovies />} path="/polularMovies"/>
      <Route element={<PopularTV />} path="/popularTVShows"/>
      <Route element={<TopRated />} path="/TopRated"/>
    </Routes>
  );
}

export default App;
