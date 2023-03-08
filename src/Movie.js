import React from 'react';
import PropTypes from 'prop-types'
import './Movie.scss';

function Movie({id, title, year, summary, poster, genres}) { 

    const genre = genres.map((item, index) => {
        return <li key={index} className='movie__genres-item'>{item}</li>
    })

    return (
        <div className='movie'>
            <div className='movie__poster'>
                <img src={poster} alt={title} title={title} />
            </div>
            <div className='movie__column'>
                <h3 className='movie__title'>{title}</h3>
                <h5 className='movie__year'>{year}</h5>
                <ul className='movie__genres'>
                    {genre}
                </ul>
                <p className='movie__summary'>{summary}</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;