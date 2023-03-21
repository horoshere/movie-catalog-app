import Movie from './Movie';

import './MoviesList.scss';

const MovieList = ({data}) => {

    const element = data.map(item => {
        return (
            <Movie 
            key={item.id}
            id={item.id}
            title={item.title}
            year={item.year}
            summary={item.summary}
            poster={item.medium_cover_image}
            genres={item.genres}
            rating={item.rating}
            bigPoster={item.large_cover_image} />
        )
    });

    return (
        <ul className="movies">
            {element}
        </ul>
    )
}

export default MovieList;