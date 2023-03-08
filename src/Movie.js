import React from 'react';

function Movie({key, id, title, year, summary, poster}) {
    return (
        <div className='movie'>
            <div className='movie__poster'>
                <img src={poster} alt={title} title={title} />
            </div>
            <div className='movie__column'>
                <h3 className='movie__title'>{title}</h3>
                <h5 className='movie__year'>{year}</h5>
                <p className='movie__summary'>{summary}</p>
            </div>
        </div>
    )
}

export default Movie;