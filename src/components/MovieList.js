import React from 'react'

const MovieList = ({poster_path, title, overview, vote_average, release_date}) => {
    const IMG_API = 'https://image.tmdb.org/t/p/w500/';

    return (
        <div className = "movie">
            <img src={IMG_API + poster_path} alt={title}/>
            <div className='movie-info'>
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
            <div className='movie-over'>
                <h2>Overview</h2>
                <small>Released: {release_date}</small>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default MovieList
