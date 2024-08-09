import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constrants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowplayingMovies =()=>{
    const dispatch = useDispatch()
    const nowPlayingMovies = useSelector(
      (store) => store.movies.nowPlayingMovies
    );
  
    const getNowPlayingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results))
      }
      useEffect(()=>{
        !nowPlayingMovies && getNowPlayingMovies();
      },[])
}
export default useNowplayingMovies;