import React from 'react'
import { IMG_CDN_URL } from '../utils/Constrants'

const MovieCard = ({posterPath}) => {
  return (
    <div >
        <div className="w-36 md:w-48 pr-4">
            <img src={IMG_CDN_URL + posterPath} alt="" />
        </div>
        
    </div>
  )
}

export default MovieCard