import React from 'react';
import Header from './Header';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies()
  return (
    <>
  
    <Header/>
      {/* 
        Main Conatiner
          - VideoBackground
          - VideoTitle
        Secondary Conatiner
          -Movieslist * n
          -Cards * n
       */}
       <main className=''>
       <MainContainer/>
       <SecondaryContainer/>
       </main>
    </>
  );
}

export default Browse;
