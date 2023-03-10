import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './Movie.scss';

function Movie({title, year, summary, poster, genres}) { 

    const genre = genres.map((item, index) => {
        return <li key={index} className='movie__genres-item'>{item}</li>
    });  

    return (
        <Link to={{
            pathname: 'movie-detail',
            state: {
                title: title,
                year: year,
                summary: summary,
                poster: poster,
                genres: genres
            }
        }}>
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
                    <p className='movie__summary'>{summary.slice(0, 140)}...</p>
                </div>
            </div>
        </Link>
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